import mongoose, { Document, mongo, Schema }  from "mongoose";

export interface IJob extends Document{
    title: string;
    description: string;
    fee: number;
    experience: number,
    location: string,
    jobType: string,
    jobCategory: string,
    company: mongoose.Schema.Types.ObjectId;
    created_by: mongoose.Schema.Types.ObjectId;
    previousWorks: mongoose.Schema.Types.ObjectId[];
}
const JobSchema: Schema<IJob> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    previousWorks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Consultation",
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model<IJob>('Job',JobSchema)