import React from 'react'
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 m-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 font-medium text-[#F83002]">
          Effortless Booking for Quality Local Services
        </span>
        <h1 className="text-5xl font-bold">
          Find & Book Local Experts <br /> for Any Job—
          <span className="text-[#6A38C2]">Simple, Fast, and Reliable</span>
        </h1>
        <p>
          Discover and book top-rated local experts for any job with ease.
          Whether you need a painter, electrician, or any other skilled
          professional, our platform ensures a simple, fast, and reliable
          experience
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Discover and Secure Expert Services for Your Home and Business "
            className=" outline-none border-none w-full"
          />
          <Button className=" rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection