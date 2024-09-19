import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


const JobDescription:React.FC = () => {
  
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Service </h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant='secondary'>
            Job Cateogry
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="secondary">
              experience
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
              fee
            </Badge>
          </div>
        </div>
        <Button

          className={`rounded-lg  bg-[#7209b7] hover:bg-[#5f32ad]
          `}
        >
          Booknow
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Service Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Service:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Painter
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Hyderabad
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, libero?
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
           2 yrs
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Fee:{" "}
          <span className="pl-4 font-normal text-gray-800">
            9999 /-
          </span>
        </h1>
        <h1 className="font-bold my-1">
          No.of Calls:{" "}
          <span className="pl-4 font-normal text-gray-800">
            108
          </span>
        </h1>
       
      </div>
    </div>
  );
};

export default JobDescription;
