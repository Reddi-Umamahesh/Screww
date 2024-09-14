import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards: React.FC = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white cursor-pointer">
      <h1 className="font-medium text-lg">Company Name</h1>
      <p className="text-sm text-gray-500">location</p>
      <div>
        <h1 className="font-bold text-lg my-2 ">Job title</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, porro
          quidem. Voluptates, nihil.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Badge className={"text-[#6A38C2] font-bold"} variant="secondary">
            No.of calls
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant="secondary">
            exp
          </Badge>

          <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
            Price
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards