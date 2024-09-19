import React from "react";
import { Badge } from "./ui/badge";
import { IJob } from '../Interfaces/job';


interface LatestJobCardsProps {
  job: IJob;
}

const LatestJobCards: React.FC<LatestJobCardsProps> = ({ job }) => {
  console.log(job)
  return (
    
    <div className="p-5 rounded-md shadow-xl bg-white cursor-pointer">
      <h1 className="font-medium text-lg">
        {  job.company.name}
      </h1>
      <p className="text-sm text-gray-500">
        {typeof job.location === "string" ? job.location : "Unknown Location"}
      </p>
      <div>
        <h1 className="font-bold text-lg my-2 ">
          {typeof job.title === "string" ? job.title : "No Title"}
        </h1>
        <p className="text-gray-600">
          {typeof job.description === "string"
            ? job.description
            : "No Description"}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-[#6A38C2] font-bold"} variant="secondary">
            {job.fee ? `${job.fee} Calls` : "No Fee Info"}
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="secondary">
            {job.experience
              ? `${job.experience} yrs exp`
              : "No Experience Info"}
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
            {`₹${job.fee}/-`}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
