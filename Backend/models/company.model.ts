import mongoose, { Document, Schema } from "mongoose";


export interface ICompany extends Document {
  name: string;
  phoneNumber?: string;
  description?: string;
  website?: string;
  location?: string;
    logo?: string;
    userId: mongoose.Types.ObjectId;
}
const companySchema: Schema<ICompany> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  logo: {
    type: String, // URL to company logo
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

export const Company = mongoose.model<ICompany>('Comapany',companySchema)
