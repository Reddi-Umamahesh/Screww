import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Iuser, Iprofile } from "../models/user.model";

interface RegisterRequest extends Request {
  file?: Express.Multer.File;
}
interface ExtendedRequest extends Request {
  id?: string;
}

interface UpdateProfileRequest extends ExtendedRequest {
  file?: Express.Multer.File;
}

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
      const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "Please fill in all fields", success: false });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, phoneNumber, password, role } = req.body;
    if ((!email && !phoneNumber) || !password || !role) {
      return res.status(400).json({
        message: "Please fill in all fields",
        success: false,
      });
    }
    let user;
    if (email) {
      user = await User.findOne({ email });
    } else {
      user = await User.findOne({ phoneNumber });
    }
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or phone number",
        success: false,
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Incorrect  password",
        success: false,
      });
    }
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY as string, {
      expiresIn: "1d",
    });
    const userResponse = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${userResponse.fullname}`,
        user: userResponse,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const logout = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: " Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const updateProfile = async (
  req: UpdateProfileRequest,
  res: Response
): Promise<Response> => {
  try {
    const { fullname, email, phoneNumber, bio } = req.body;
    let useId = req.id; //middleware
    const user = await User.findById(useId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;

    await user.save();
    const updateUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
