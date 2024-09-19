import { ICompany } from "./company";

export interface IProfile {
  bio?: string;
  company?: ICompany | string;
  profilePhoto?: string;
}

export interface IUser {
  _id: string;
  fullname: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: "User" | "Professional";
  profile: IProfile;
}
