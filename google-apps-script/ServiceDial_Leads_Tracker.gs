/**
 * ==============================================================================
 * SERVICE DIAL — MULTI-CHANNEL LEADS TRACKER (GOOGLE APPS SCRIPT WEBHOOK)
 * ==============================================================================
 * Central Google Sheets Webhook handler for Service Dial (servicedialtm.com).
 * Captures real-time intent leads into 4 DEDICATED, SEPARATE SHEET TABS:
 *
 *   1. "WhatsApp_Leads"     — Inbound inquiries from WhatsApp floating modal
 *   2. "Call_Leads"         — Inbound phone callback requests from Call modal
 *   3. "Email_Leads"        — Inbound proposal/RFP requests from Email modal
 *   4. "Website_Form_Leads" — Full form submissions from /contact & calculators
 *
 * ZERO-COLLISION CONCURRENCY:
 *   Uses LockService with a 30-second wait window to ensure no concurrent
 *   leads overwrite each other during high-traffic campaigns.
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Open Google Sheets (create a new blank spreadsheet or open existing).
 * 2. Name your spreadsheet: "Service Dial — Master Leads Tracker".
 * 3. In the menu, click: Extensions > Apps Script.
 * 4. Delete any code in the editor and paste this ENTIRE file.
 * 5. Click "Save" (disk icon or Ctrl+S / Cmd+S).
 * 6. Click "Deploy" > "New deployment" (or "Manage deployments" > edit to update).
 * 7. In the modal:
 *    - Click the gear icon next to "Select type" and choose: "Web app"
 *    - Description: "Service Dial 4-Channel Leads Webhook v2.0"
 *    - Execute as: "Me (<your-email>)"
 *    - Who has access: "Anyone" (allows anonymous POST from website backend)
 * 8. Click "Deploy" and Authorize Access if prompted by Google.
 * 9. Copy the generated "Web app URL" (ends in /exec).
 * 10. Add to your project's .env file:
 *     GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
 * ==============================================================================
 */

// ─── The 4 Dedicated Sheet Tab Names ──────────────────────────────────────────
var SHEETS = {
  WHATSAPP: 'WhatsApp_Leads',
  CALL: 'Call_Leads',
  EMAIL: 'Email_Leads',
  WEBSITE_FORM: 'Website_Form_Leads'
};

// ─── Master Column Headers per Dedicated Sheet ────────────────────────────────
var HEADERS = {
  WhatsApp_Leads: [
    'Timestamp (IST)',
    'Lead ID',
    'Full Name',
    'WhatsApp Number',
    'Business Email',
    'Company / Organisation',
    'Service Required',
    'Workforce Scale',
    'Message / Requirements',
    'Source URL',
    'DPDP Act Consent',
    'Chat Status'
  ],
  Call_Leads: [
    'Timestamp (IST)',
    'Lead ID',
    'Full Name',
    'Phone Number to Call',
    'Business Email',
    'Company / Organisation',
    'Service Required',
    'Workforce Scale',
    'Message / Requirements',
    'Source URL',
    'DPDP Act Consent',
    'Call Status'
  ],
  Email_Leads: [
    'Timestamp (IST)',
    'Lead ID',
    'Full Name',
    'Contact Phone',
    'Business Email to Reply',
    'Company / Organisation',
    'Service Required',
    'Workforce Scale',
    'Message / Scope',
    'Source URL',
    'DPDP Act Consent',
    'Email Status'
  ],
  Website_Form_Leads: [
    'Timestamp (IST)',
    'Lead ID',
    'Full Name',
    'Company Name',
    'Business Email',
    'Phone Number',
    'Service Category',
    'Implementation Timeline',
    'Employee Headcount',
    'Priority Level',
    'Detailed Scope / Message',
    'Source URL / Referrer',
    'DPDP Act Consent',
    'Lead Status'
  ]
};

// ─── Header Styling Themes per Sheet ──────────────────────────────────────────
var HEADER_THEMES = {
  WhatsApp_Leads: { bg: '#064E3B', color: '#FFFFFF' },    // Forest Green (WhatsApp)
  Call_Leads: { bg: '#1E3A8A', color: '#FFFFFF' },        // Executive Blue (Phone Call)
  Email_Leads: { bg: '#831843', color: '#FFFFFF' },       // Deep Magenta (Email Desk)
  Website_Form_Leads: { bg: '#0B192C', color: '#FFFFFF' } // Deep Navy (Enterprise Mandates)
};

// ─── Webhook POST Handler ─────────────────────────────────────────────────────
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Concurrency-safe lock for up to 30 seconds
  try {
    lock.waitLock(30000);
  } catch (lockErr) {
    return jsonOutput({
      success: false,
      error: 'Script lock timeout. Please retry.',
      details: lockErr.toString()
    });
  }

  try {
    var rawContent = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var payload = JSON.parse(rawContent);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      throw new Error('Active Spreadsheet context not found. Ensure this script is container-bound.');
    }

    var timestamp = getFormattedTimestamp();
    var sheetName = determineTargetSheet(payload);

    var sheet = getOrCreateSheet(ss, sheetName);
    ensureHeaders(sheet, sheetName);

    var rowData = buildRowData(sheetName, payload, timestamp);
    sheet.appendRow(rowData);
    formatLatestRow(sheet);

    return jsonOutput({
      success: true,
      sheet: sheetName,
      leadId: payload.leadId || '',
      timestamp: timestamp,
      message: 'Lead successfully captured in ' + sheetName + '.'
    });

  } catch (err) {
    return jsonOutput({
      success: false,
      error: err.message || err.toString()
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (releaseErr) {}
  }
}

// ─── Webhook GET Handler (Health Check) ────────────────────────────────────────
function doGet(e) {
  var ss = null;
  var sheetNames = [];
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      var sheets = ss.getSheets();
      for (var i = 0; i < sheets.length; i++) {
        sheetNames.push(sheets[i].getName());
      }
    }
  } catch (err) {}

  return jsonOutput({
    status: 'Service Dial Leads Tracker Webhook is Live ✅',
    spreadsheetName: ss ? ss.getName() : 'Unknown',
    activeTabs: sheetNames,
    supportedTabs: [
      SHEETS.WHATSAPP,
      SHEETS.CALL,
      SHEETS.EMAIL,
      SHEETS.WEBSITE_FORM
    ],
    serverTimeIST: getFormattedTimestamp(),
    version: '2.0.0-four-channels'
  });
}

// ─── Target Sheet Router ──────────────────────────────────────────────────────
function determineTargetSheet(payload) {
  var requestedSheet = (payload.sheet || '').trim();
  var channel = (payload.channel || payload.contactChannel || '').toLowerCase().trim();

  // 1. Direct match by sheet name parameter
  if (requestedSheet === SHEETS.WHATSAPP || requestedSheet === 'WhatsApp') {
    return SHEETS.WHATSAPP;
  }
  if (requestedSheet === SHEETS.CALL || requestedSheet === 'Call') {
    return SHEETS.CALL;
  }
  if (requestedSheet === SHEETS.EMAIL || requestedSheet === 'Email') {
    return SHEETS.EMAIL;
  }
  if (
    requestedSheet === SHEETS.WEBSITE_FORM ||
    requestedSheet === 'Enterprise_Mandate_Leads' ||
    requestedSheet === 'Website_Form'
  ) {
    return SHEETS.WEBSITE_FORM;
  }

  // 2. Channel-based routing for floating modal submissions
  if (channel === 'whatsapp') {
    return SHEETS.WHATSAPP;
  }
  if (channel === 'call' || channel === 'phone') {
    return SHEETS.CALL;
  }
  if (channel === 'email' || channel === 'mail') {
    return SHEETS.EMAIL;
  }

  // 3. Default fallback for direct forms (/contact, fee estimator, etc.)
  return SHEETS.WEBSITE_FORM;
}

// ─── Row Data Builder ─────────────────────────────────────────────────────────
function buildRowData(sheetName, payload, timestamp) {
  var rawPhone = payload.phone || payload.whatsapp || payload.contactNumber || '';
  // Prepend apostrophe so Google Sheets treats it as text (no scientific notation / lost 0s)
  var safePhone = rawPhone ? "'" + rawPhone.toString().trim() : '';
  var leadId = payload.leadId || ('SD-' + Date.now().toString(36).toUpperCase());

  // 1. WhatsApp Leads Tab
  if (sheetName === SHEETS.WHATSAPP) {
    return [
      timestamp,
      leadId,
      payload.name || payload.fullName || '',
      safePhone,
      payload.email || payload.businessEmail || '',
      payload.company || payload.organisation || '—',
      payload.service || payload.primaryService || 'HRMS & Payroll Management',
      payload.headcount || payload.scale || 'Not Specified',
      payload.message || payload.notes || '—',
      payload.sourceUrl || payload.pageUrl || 'https://servicedialtm.com',
      payload.dpdpConsent ? 'Granted (Section 8(2))' : 'Granted',
      'New'
    ];
  }

  // 2. Call Leads Tab
  if (sheetName === SHEETS.CALL) {
    return [
      timestamp,
      leadId,
      payload.name || payload.fullName || '',
      safePhone,
      payload.email || payload.businessEmail || '',
      payload.company || payload.organisation || '—',
      payload.service || payload.primaryService || 'HRMS & Payroll Management',
      payload.headcount || payload.scale || 'Not Specified',
      payload.message || payload.notes || '—',
      payload.sourceUrl || payload.pageUrl || 'https://servicedialtm.com',
      payload.dpdpConsent ? 'Granted (Section 8(2))' : 'Granted',
      'Pending Callback'
    ];
  }

  // 3. Email Leads Tab
  if (sheetName === SHEETS.EMAIL) {
    return [
      timestamp,
      leadId,
      payload.name || payload.fullName || '',
      safePhone,
      payload.email || payload.businessEmail || '',
      payload.company || payload.organisation || '—',
      payload.service || payload.primaryService || 'HRMS & Payroll Management',
      payload.headcount || payload.scale || 'Not Specified',
      payload.message || payload.notes || payload.scope || '—',
      payload.sourceUrl || payload.pageUrl || 'https://servicedialtm.com',
      payload.dpdpConsent ? 'Granted (Section 8(2))' : 'Granted',
      'Pending Reply'
    ];
  }

  // 4. Website Form Leads Tab (Main Contact Form, Fee Estimator, etc.)
  return [
    timestamp,
    leadId,
    payload.name || payload.fullName || '',
    payload.company || payload.companyName || '',
    payload.email || payload.workEmail || '',
    safePhone,
    payload.service || 'Comprehensive Workforce Management',
    payload.timeline || '15-30 Days',
    payload.headcount || '10-50 Employees',
    payload.priority || payload.priorityLevel || 'STANDARD_ENTERPRISE',
    payload.message || payload.details || '—',
    payload.sourceUrl || payload.referrer || 'https://servicedialtm.com/contact',
    payload.dpdpConsent ? 'Granted (Section 8(2))' : 'Granted',
    'New'
  ];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getOrCreateSheet(ss, name) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function ensureHeaders(sheet, sheetName) {
  if (sheet.getLastRow() === 0) {
    var headers = HEADERS[sheetName] || [];
    var theme = HEADER_THEMES[sheetName] || { bg: '#0B192C', color: '#FFFFFF' };

    if (headers && headers.length > 0) {
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight('bold');
      headerRange.setBackground(theme.bg);
      headerRange.setFontColor(theme.color);
      headerRange.setHorizontalAlignment('center');
      sheet.setFrozenRows(1);

      // Auto-fit column widths
      for (var col = 1; col <= headers.length; col++) {
        sheet.setColumnWidth(col, 160);
      }
      sheet.setColumnWidth(1, 185); // Timestamp
      sheet.setColumnWidth(3, 175); // Name
      sheet.setColumnWidth(4, 160); // Phone
      sheet.setColumnWidth(5, 190); // Email
      sheet.setColumnWidth(9, 250); // Message / Requirements
    }
  }
}

function formatLatestRow(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    var numCols = sheet.getLastColumn();
    var range = sheet.getRange(lastRow, 1, 1, numCols);
    range.setVerticalAlignment('middle');
    range.setFontFamily('Arial');
    range.setFontSize(10);

    // Alternating soft zebra rows
    if (lastRow % 2 === 0) {
      range.setBackground('#F8FAFC'); // Slate 50
    } else {
      range.setBackground('#FFFFFF');
    }
  }
}

function getFormattedTimestamp() {
  return Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy, hh:mm:ss a') + ' IST';
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
