import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFeeRule extends Document {
  actionSubtype: 'TM-A Registration' | 'TM-R Renewal' | 'TM-M Correction' | 'Section 9 Reply' | 'Section 11 Reply' | 'Show Cause Hearing';
  filingMode: 'Physical' | 'E-Filing';
  applicantQualification: 'Individual' | 'DPIIT_Startup' | 'Udyam_MSME' | 'Corporate';
  monetaryUnit: string;
  unitBasis: 'Per-Mark-Per-Class' | 'Per-Application';
  govtFee: number;
  professionalFee: number;
  gstTreatment: 'Exempt' | 'Standard 18%' | 'Reverse Charge';
  effectivePeriodStart: Date;
  effectivePeriodEnd?: Date;
  reviewerMetadata?: string;
}

const FeeRuleSchema: Schema = new Schema({
  actionSubtype: { type: String, required: true },
  filingMode: { type: String, enum: ['Physical', 'E-Filing'], default: 'E-Filing' },
  applicantQualification: { 
    type: String, 
    enum: ['Individual', 'DPIIT_Startup', 'Udyam_MSME', 'Corporate'],
    required: true
  },
  monetaryUnit: { type: String, default: 'INR' },
  unitBasis: { type: String, enum: ['Per-Mark-Per-Class', 'Per-Application'], required: true },
  govtFee: { type: Number, required: true },
  professionalFee: { type: Number, required: true },
  gstTreatment: { type: String, enum: ['Exempt', 'Standard 18%', 'Reverse Charge'], default: 'Standard 18%' },
  effectivePeriodStart: { type: Date, required: true, default: Date.now },
  effectivePeriodEnd: { type: Date },
  reviewerMetadata: { type: String }
}, {
  timestamps: true
});

export const FeeRule: Model<IFeeRule> = mongoose.models.FeeRule || mongoose.model<IFeeRule>('FeeRule', FeeRuleSchema);
