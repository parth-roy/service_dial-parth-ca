import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGeography extends Document {
  level: 'State' | 'District' | 'Subdistrict' | 'LocalBody';
  lgdCode: number;
  name: string;
  slug: string;
  parentId?: mongoose.Types.ObjectId;
  jurisdictionId?: mongoose.Types.ObjectId;
  provenanceSource: string;
}

const GeographySchema: Schema = new Schema({
  level: { 
    type: String, 
    enum: ['State', 'District', 'Subdistrict', 'LocalBody'], 
    required: true 
  },
  lgdCode: { type: Number, sparse: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  parentId: { type: Schema.Types.ObjectId, ref: 'Geography' },
  jurisdictionId: { type: Schema.Types.ObjectId, ref: 'Jurisdiction' },
  provenanceSource: { type: String, default: 'LGD Dashboard' }
}, {
  timestamps: true
});

GeographySchema.index({ slug: 1, level: 1 }, { unique: true });
GeographySchema.index({ lgdCode: 1, level: 1 });

export const Geography: Model<IGeography> = mongoose.models.Geography || mongoose.model<IGeography>('Geography', GeographySchema);
