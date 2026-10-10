import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITMRegistryStatus extends Document {
  applicationNumber: string;
  tmClass?: number;
  applicantName?: string;
  markName?: string;
  status: string;
  jurisdiction?: string;
  filingDate?: Date;
  nextActionDeadline?: Date;
  objectionSection?: "Section 9" | "Section 11" | "Both" | "None";
  examinationReportUrl?: string;
  lastCheckedAt: Date;
  rawPayload?: Record<string, any>;
}

const TMRegistryStatusSchema: Schema = new Schema({
  applicationNumber: { type: String, required: true, unique: true },
  tmClass: { type: Number },
  applicantName: { type: String },
  markName: { type: String },
  status: { type: String, required: true },
  jurisdiction: { type: String },
  filingDate: { type: Date },
  nextActionDeadline: { type: Date },
  objectionSection: { 
    type: String, 
    enum: ["Section 9", "Section 11", "Both", "None"],
    default: "None"
  },
  examinationReportUrl: { type: String },
  lastCheckedAt: { type: Date, default: Date.now },
  rawPayload: { type: Schema.Types.Mixed }
}, {
  timestamps: true
});

TMRegistryStatusSchema.index({ status: 1 });
TMRegistryStatusSchema.index({ lastCheckedAt: 1 });

export const TMRegistryStatus: Model<ITMRegistryStatus> =
  mongoose.models.TMRegistryStatus ||
  mongoose.model<ITMRegistryStatus>("TMRegistryStatus", TMRegistryStatusSchema);
