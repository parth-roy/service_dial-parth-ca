import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INiceClass extends Document {
  classNumber: number;
  type: 'Goods' | 'Services';
  description: string;
  industryTags: string[];
}

const NiceClassSchema: Schema = new Schema({
  classNumber: { type: Number, required: true, unique: true, min: 1, max: 45 },
  type: { type: String, enum: ['Goods', 'Services'], required: true },
  description: { type: String, required: true },
  industryTags: [{ type: String }]
}, {
  timestamps: true
});

export const NiceClass: Model<INiceClass> = mongoose.models.NiceClass || mongoose.model<INiceClass>('NiceClass', NiceClassSchema);
