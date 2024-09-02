import { Request, Response } from "express";

import { Job, IJob } from "../models/job.model";

interface ExtendedRequest extends Request {
  id?: string;
}

export const postJob = async (
  req: ExtendedRequest,
  res: Response
): Promise<Response> => {
  try {
    const {
      title,
      description,
      fee,
      experience,
      location,

      jobCategory,
      companyId,
    } = req.body;
    const userId = req.id;
    if (
      !title ||
      !description ||
      !fee ||
      !location ||
      !experience ||
      !jobCategory ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Something is missing.",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      fee,
      location,
      experience,
      jobCategory,
      company: companyId,
      created_by: userId,
    });
    return res.status(201).json({
      message: "New job created successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error creating job",
      success: false,
    });
  }
};
//user
export const getAllJobs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const keyword = (req.query.keyword as string) || ""; // Explicitly type `keyword` as string
    const query = {
      $or: [
        {
          title: {
            $regex: keyword,
            $options: "i",
          },
        },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error fetching jobs",
      success: false,
    });
  }
};

//user
export const getJobById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error fetching job",
      success: false,
    });
  }
};

//worker
export const getAdminJob = async (
  req: ExtendedRequest,
  res: Response
): Promise<Response> => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId })
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error fetching jobs",
      success: false,
    });
  }
};
