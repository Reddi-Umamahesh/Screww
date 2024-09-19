export interface IConsultation {
  _id: string;
  job: string;
  consultant: string;
  noOfTimes: number;
  rating: "excellent" | "good" | "average" | "poor" | "terrible";
}
