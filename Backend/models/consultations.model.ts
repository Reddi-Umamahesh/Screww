import mongoose, { Document, Schema } from "mongoose";

export interface IConsultation extends Document {
  job: mongoose.Schema.Types.ObjectId;
  consultant: mongoose.Schema.Types.ObjectId;
  rating: "excellent" | "good" | "average" | "poor" | "terrible";
}
const consultationSchema: Schema<IConsultation> = new Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    consultant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: String,
      enum: ["excellent", "good", "average", "poor", "terrible"],
      default: "good",
    },
  },
  { timestamps: true }
);
export const Consultation = mongoose.model<IConsultation>('Conultation',consultationSchema)