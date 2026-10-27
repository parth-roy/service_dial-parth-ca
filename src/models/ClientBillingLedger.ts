import mongoose, { Schema, Document, Model } from "mongoose";

export interface IClientBillingLedger extends Document {
  leadId: string; // References LeadInquiry.leadId
  clientCode: string; // e.g. "CLI-KOL-042" (No PII / anonymized account identifier)
  contractStartDate: Date;
  contractEndDate?: Date;
  attributionWindowMonths: number; // default: 36
  commissionRate: number; // default: 0.20 (20%)
  serviceCategory: "HRMS_PAYROLL" | "STATUTORY_COMPLIANCE" | "STAFFING_RECRUITMENT" | "COMBINED_MANAGED_SERVICES";
  monthlyBillingHistory: {
    billingMonth: string; // "YYYY-MM"
    invoiceNumber: string;
    grossBilledAmountINR: number;
    partherCommissionAmountINR: number; // grossBilledAmountINR * commissionRate
    paymentStatus: "PENDING" | "PAID" | "DISPUTED" | "WAIVED";
    paymentSettledAt?: Date;
  }[];
  totalBilledINR: number;
  totalPartherCommissionEarnedINR: number;
  isActive: boolean;
  notes?: string;
}

const ClientBillingLedgerSchema: Schema = new Schema(
  {
    leadId: { type: String, required: true, index: true },
    clientCode: { type: String, required: true, unique: true, index: true },
    contractStartDate: { type: Date, required: true },
    contractEndDate: { type: Date },
    attributionWindowMonths: { type: Number, default: 36, required: true },
    commissionRate: { type: Number, default: 0.2, required: true },
    serviceCategory: {
      type: String,
      enum: [
        "HRMS_PAYROLL",
        "STATUTORY_COMPLIANCE",
        "STAFFING_RECRUITMENT",
        "COMBINED_MANAGED_SERVICES",
      ],
      required: true,
    },
    monthlyBillingHistory: [
      {
        billingMonth: { type: String, required: true },
        invoiceNumber: { type: String, required: true },
        grossBilledAmountINR: { type: Number, required: true },
        partherCommissionAmountINR: { type: Number, required: true },
        paymentStatus: {
          type: String,
          enum: ["PENDING", "PAID", "DISPUTED", "WAIVED"],
          default: "PENDING",
        },
        paymentSettledAt: { type: Date },
      },
    ],
    totalBilledINR: { type: Number, default: 0 },
    totalPartherCommissionEarnedINR: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

// Calculate totals prior to saving
ClientBillingLedgerSchema.pre("save", function (this: IClientBillingLedger) {
  if (this.monthlyBillingHistory && this.monthlyBillingHistory.length > 0) {
    this.totalBilledINR = this.monthlyBillingHistory.reduce(
      (sum: number, item: { grossBilledAmountINR?: number }) =>
        sum + (item.grossBilledAmountINR || 0),
      0
    );
    this.totalPartherCommissionEarnedINR = this.monthlyBillingHistory.reduce(
      (sum: number, item: { partherCommissionAmountINR?: number }) =>
        sum + (item.partherCommissionAmountINR || 0),
      0
    );
  }
});

export const ClientBillingLedger: Model<IClientBillingLedger> =
  mongoose.models.ClientBillingLedger ||
  mongoose.model<IClientBillingLedger>(
    "ClientBillingLedger",
    ClientBillingLedgerSchema
  );
