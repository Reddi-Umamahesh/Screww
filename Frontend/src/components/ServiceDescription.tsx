import React from 'react'
import Navbar from './shared/Navbar'
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ServiceDescription: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <div>
              <h1 className="font-bold text-xl">Service Description</h1>
              <div className="flex items-center gap-2 mt-4">
                <Badge
                  className={"text-[#6A38C2] font-bold"}
                  variant="secondary"
                >
                  Job Category
                </Badge>
                <Badge
                  className={"text-[#F83002] font-bold"}
                  variant="secondary"
                >
                  experience
                </Badge>

                <Badge
                  className={"text-[#7209b7] font-bold"}
                  variant="secondary"
                >
                  fee
                </Badge>
              </div>
            </div>
          </div>
          <Button>BookNow</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription