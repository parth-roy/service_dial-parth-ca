import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJurisdiction extends Document {
  officeName: string;
  officialAddress: string;
  statesCovered: string[];
}

const JurisdictionSchema: Schema = new Schema({
  officeName: { type: String, required: true, unique: true }, // e.g., 'Mumbai', 'New Delhi'
  officialAddress: { type: String, required: true },
  statesCovered: [{ type: String }],
}, {
  timestamps: true
});

export const Jurisdiction: Model<IJurisdiction> = mongoose.models.Jurisdiction || mongoose.model<IJurisdiction>('Jurisdiction', JurisdictionSchema);
