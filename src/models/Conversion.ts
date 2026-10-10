import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IConversionIntent extends Document {
  sessionId: string;
  assetSlug: string; // The URL slug where the conversion happened
  eventType: 'WhatsApp_Click' | 'Form_Init';
  clickedAt: Date;
}

const ConversionIntentSchema: Schema = new Schema({
  sessionId: { type: String, required: true },
  assetSlug: { type: String, required: true },
  eventType: { type: String, enum: ['WhatsApp_Click', 'Form_Init'], required: true },
  clickedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export const ConversionIntent: Model<IConversionIntent> = mongoose.models.ConversionIntent || mongoose.model<IConversionIntent>('ConversionIntent', ConversionIntentSchema);

export interface ILeadInquiry extends Document {
  contactChannel: 'WhatsApp' | 'Direct Form' | 'Phone';
  submittedInformation: Record<string, any>;
  serviceContext?: string;
  consentProvenance: {
    optInTimestamp: Date;
    termsVersion: string;
  };
  ownerId?: string;
  intakeStatus: 'New' | 'Working' | 'Qualified' | 'Rejected';
  intentId?: mongoose.Types.ObjectId; // Optional link to ConversionIntent
}

const LeadInquirySchema: Schema = new Schema({
  contactChannel: { type: String, enum: ['WhatsApp', 'Direct Form', 'Phone'], required: true },
  submittedInformation: { type: Schema.Types.Mixed, required: true },
  serviceContext: { type: String },
  consentProvenance: {
    optInTimestamp: { type: Date, required: true },
    termsVersion: { type: String, required: true }
  },
  ownerId: { type: String },
  intakeStatus: { 
    type: String, 
    enum: ['New', 'Working', 'Qualified', 'Rejected'], 
    default: 'New' 
  },
  intentId: { type: Schema.Types.ObjectId, ref: 'ConversionIntent' }
}, {
  timestamps: true
});

export const LeadInquiry: Model<ILeadInquiry> = mongoose.models.LeadInquiry || mongoose.model<ILeadInquiry>('LeadInquiry', LeadInquirySchema);
