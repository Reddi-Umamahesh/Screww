import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

import randomJobs from "@/utils/random";

const Browse: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-5">
          Search Results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {randomJobs.map((job) => (
            <Job key={job._id} job={job} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
