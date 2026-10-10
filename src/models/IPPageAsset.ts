import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IIPPageAsset extends Document {
  slug: string;
  routeFamily: 'City-Intent' | 'State-Hub' | 'Office-Guide' | 'Tool';
  intentEnum?: 'registration' | 'renewal' | 'objection-sec9' | 'objection-sec11' | 'opposition' | 'show-cause-hearing';
  geographyId?: mongoose.Types.ObjectId;
  publicationState: 'Draft' | 'Published' | 'Withheld' | 'Merged' | 'NoIndex' | 'Withdrawn';
  mergeTargetSlug?: string;
  editorialReviewMetadata?: {
    reviewerId: string;
    reviewedAt: Date;
    sourceCitations: string[];
  };
  contentOverrides?: Record<string, any>;
}

const IPPageAssetSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  routeFamily: { 
    type: String, 
    enum: ['City-Intent', 'State-Hub', 'Office-Guide', 'Tool'],
    required: true
  },
  intentEnum: { 
    type: String,
    enum: ['registration', 'renewal', 'objection-sec9', 'objection-sec11', 'opposition', 'show-cause-hearing']
  },
  geographyId: { type: Schema.Types.ObjectId, ref: 'Geography' },
  publicationState: {
    type: String,
    enum: ['Draft', 'Published', 'Withheld', 'Merged', 'NoIndex', 'Withdrawn'],
    default: 'Draft'
  },
  mergeTargetSlug: { type: String }, // Used for 301 redirects if Merged
  editorialReviewMetadata: {
    reviewerId: String,
    reviewedAt: Date,
    sourceCitations: [String]
  },
  contentOverrides: { type: Schema.Types.Mixed } // JSONB equivalent for custom FAQs, local stats, etc.
}, {
  timestamps: true
});

IPPageAssetSchema.index({ publicationState: 1 });
IPPageAssetSchema.index({ geographyId: 1, intentEnum: 1 }, { unique: true, sparse: true });

export const IPPageAsset: Model<IIPPageAsset> = mongoose.models.IPPageAsset || mongoose.model<IIPPageAsset>('IPPageAsset', IPPageAssetSchema);
