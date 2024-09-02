import mongoose, { Schema, Document } from "mongoose";

export interface Iprofile {
  bio?: string;
  company?: mongoose.Types.ObjectId;
  profilePhoto?: string;
}
export interface Iuser extends Document {
  fullname: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: "User" | "Professionals";
  profile: Iprofile;
}

const UserSchema: Schema<Iuser> = new Schema({
  fullname: { type: String, required: true },
  phoneNumber: { type: String, required: true,unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: {
    type: String, enum: ["User", "Professional"], required:
      true
  },
  profile: {
    bio: { type: String },
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    profilePhoto: {
      type: String,
      default: ""
    }
    
  }
},{ timestamps: true }
);

export const User = mongoose.model<Iuser>('User', UserSchema);

