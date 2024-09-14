import React from 'react'
import LatestJobCards from './LatestJobCards';
const random = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Trending & Top Picks-</span> in your
        area
      </h1>
      <div className=" grid grid-cols-3 gap-4 my-5">
        {random.slice(0, 6).map(() => (
          <LatestJobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs