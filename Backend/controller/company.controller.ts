import { Request, Response } from "express";

import { Company, ICompany } from "../models/company.model";


interface ExtendedRequest extends Request {
  id?: string;
}

interface UpdateProfileRequest extends ExtendedRequest {
  file?: Express.Multer.File;
}

export const registerCompany = async (
  req: ExtendedRequest,
  res: Response
): Promise<Response> => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        messgae: "You can't register same company",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(200).json({
      message: "Company created successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error occured while registering the company",
      success: false,
    });
  }
};

//all companies
export const getCompanies = async (
  req: ExtendedRequest,
  res: Response
): Promise<Response> => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies.length) {
      return res.status(400).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Companies found",
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while fetching the companies.",
      success: false,
    });
  }
};

export const getCompanyById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while fetching the company.",
      success: false,
    });
  }
};

export const updateCompany = async (
  req: UpdateProfileRequest,
  res: Response
): Promise<Response> => {
  try {
    const { name, description, website, phoneNumber, location } = req.body;
    const updateData = { name, description, phoneNumber,website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData);
    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Company updated successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while updating the company.",
      success: false,
    });
  }
};
