# Service Dial — Google Sheets Leads Webhook Deployment Guide (4-Channel System)

This directory contains the standalone Google Apps Script (`ServiceDial_Leads_Tracker.gs`) used to automatically stream inbound leads and intent clicks from **Service Dial** (`servicedialtm.com`) into a Google Sheet in real time.

---

## 📋 The 4 Dedicated Sheet Tabs

Instead of mixing inquiries together, the spreadsheet automatically creates and routes incoming leads into **4 separate, beautifully styled tabs**:

| Tab Name | Trigger Source | Theme Color | Target Team |
| :--- | :--- | :--- | :--- |
| **`WhatsApp_Leads`** | User clicked WhatsApp button & submitted modal | Forest Green (`#064E3B`) | WhatsApp Chat Desk |
| **`Call_Leads`** | User clicked Call button & submitted modal | Executive Blue (`#1E3A8A`) | Call Center / Telecalling Desk |
| **`Email_Leads`** | User clicked Email button & submitted modal | Deep Magenta (`#831843`) | Executive Email / RFP Team |
| **`Website_Form_Leads`** | Main `/contact` form, Fee Estimator & Landing Page forms | Deep Navy (`#0B192C`) | Senior Enterprise Consultants |

---

## 🚀 Step-by-Step Deployment

### Step 1: Create or Open a Google Sheet
1. Visit [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name the sheet: **`Service Dial — Master Leads Tracker`**.

### Step 2: Open Apps Script Editor
1. In the Google Sheets menu, click **Extensions** > **Apps Script**.
2. A new editor tab will open with a file named `Code.gs`.
3. Select and delete any default placeholder code inside `Code.gs`.

### Step 3: Paste the Script Code
1. Open [`ServiceDial_Leads_Tracker.gs`](./ServiceDial_Leads_Tracker.gs).
2. Copy the entire file content and paste it into the Apps Script editor.
3. Press **Ctrl + S** (Windows/Linux) or **Cmd + S** (Mac) to save the project.
4. Rename the script project to `Service Dial Webhook`.

### Step 4: Deploy as a Web App
1. Click the blue **Deploy** button in the top right corner.
2. Click **New deployment** (or **Manage deployments** > ✏️ Edit > New Version if updating).
3. Next to "Select type", click the gear icon ⚙️ and select **Web app**.
4. Configure the fields:
   - **Description**: `Service Dial 4-Channel Leads Webhook v2.0`
   - **Execute as**: `Me (<your-google-account>)`
   - **Who has access**: `Anyone` *(Crucial: allows the Next.js backend to push lead data)*
5. Click **Deploy**.
6. When prompted, click **Authorize access**, select your Google account, click **Advanced**, and click **Go to Service Dial Webhook (unsafe)**, then click **Allow**.

### Step 5: Copy the Web App URL & Configure `.env`
1. Copy the **Web app URL** that appears (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).
2. Open your project's `.env` file in `/Users/parther/Parther_Technologies/service_dial/.env`.
3. Add the line:
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/AKfycb.../exec"
   ```
4. Restart your Next.js development server or re-deploy to production.

---

## 🧪 Verification & Testing

To test whether your deployed webhook is working, open the Web App URL directly in any web browser. You should see a JSON health check response like:

```json
{
  "status": "Service Dial Leads Tracker Webhook is Live ✅",
  "spreadsheetName": "Service Dial — Master Leads Tracker",
  "supportedTabs": [
    "WhatsApp_Leads",
    "Call_Leads",
    "Email_Leads",
    "Website_Form_Leads"
  ],
  "serverTimeIST": "27/10/2026, 05:32:00 pm IST",
  "version": "2.0.0-four-channels"
}
```

Whenever a user submits their details on WhatsApp, Call, Email, or the Website Contact Form, the data will be logged instantly in its own dedicated sheet tab!
