import { ICompany } from "./company";
import { IConsultation } from "./consultation";

export interface IJob {
  _id: string;
  title: string;
  description: string;
  fee: number;
  experience: number;
  location: string;
  jobCategory: string;
  company: ICompany ;
  created_by: string;
  previousWorks: IConsultation[];
}
