import { Request, Response } from "express";

import { Consultation, IConsultation } from "../models/consultation.model";

import { Job, IJob } from "../models/job.model";
import mongoose from "mongoose";


interface ExtendedRequest extends Request {
  id?: string;
}

export const bookService = async (req: ExtendedRequest, res: Response): Promise<Response> => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                messgae: "Job id is required.",
                success: false
            })
        }
        let repeated = await Consultation.findOne({ job: jobId, consultant: userId });
        const job = await Job.findById(jobId);
        if (!job) {
          return res.status(404).json({
            message: "Service not found.",
            success: false,
          });
        }
        if (repeated) {
            repeated.noOfTimes = repeated.noOfTimes + 1
            await repeated.save()
        }
        if (!repeated) {
            repeated = await Consultation.create({
                job: jobId,
                consultant: userId,
                noOfTimes: 1
            });
        }
        job.previousWorks.push(repeated._id as mongoose.Schema.Types.ObjectId)
        await job.save();
        return res.status(201).json({
            message:"Service booked successfully.",
            success:true
        })   
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        })
        
    }

}
//user
export const getBookedServices = async (req: ExtendedRequest, res: Response): Promise<Response> => {
    try {
        const userId = req.id;
        const booking = await Consultation.find({ consultant: userId }).sort({
            createdAt: -1
        }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } },
            }
        });
        if (!booking) {
            return res.status(404).json({
                message: "No booking found.",
                success: false
            });
        }
        return res.status(200).json({
            message: "Booking found.",
            booking,
            success: true,
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        })
        
    }
}
//admin
export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'previousWorks',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'consultant',
            }
        });
        if (!job) {
            return res.status(404).json({
                message: "Job not found.",
                success: false
            })
        };
        return res.status(200).json({
            message: "Job found.",
            job,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}

export const updateRating = async (req: Request, res: Response): Promise<Response> => {
    try { 
        const { rating } = req.body;
        const bookingId = req.params.id;
        if (!rating) {
            return res.status(400).json({
                message: "Rating is required.",
            })
        }
        const booking = await Consultation.findOne({ _id: bookingId });
        if (!booking) {
            return res.status(404).json({
                message: "Booking not found.",
                success: false
            })
        }
        booking.rating = rating.toLowerCase();
        await booking.save();
        return res.status(200).json({
            message: "Rating updated successfully.",
            success: true
        })        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        })
    }
}