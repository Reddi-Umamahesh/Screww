import React from 'react'
import Navbar from './shared/Navbar'
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ServiceDescription: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 p-3 m-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Service Description</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-[#6A38C2] font-bold"} variant="secondary">
                Job Category
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="secondary">
                experience
              </Badge>

              <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
                fee
              </Badge>
            </div>
          </div>
          <Button>BookNow</Button>
        </div>
      </div>
      <div className='p-3 mx-4'>
        <h1 className=" border-b-2 border-b-gray-300 font-medium py-4">
          Service Description
        </h1>
        <div className="my-4 ">
          <h1 className="font-bold my-1">
            Service
            <span className="pl-4 font-normal text-gray-800 ">Painter</span>
          </h1>
          <h1 className="font-bold my-1">
            Location
            <span className="pl-4 font-normal text-gray-800 ">Hyderabad</span>
          </h1>
          <h1 className="font-bold my-1">
            Description
            <span className="pl-4 font-normal text-gray-800 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem, ipsum
              dolor.
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience :
            <span className="pl-4 font-normal text-gray-800 ">2 years</span>
          </h1>
          <h1 className="font-bold my-1">
            Fee
            <span className="pl-4 font-normal text-gray-800 ">9999</span>
          </h1>
          <h1 className="font-bold my-1">
            No.of Calls
            <span className="pl-4 font-normal text-gray-800 ">211</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription