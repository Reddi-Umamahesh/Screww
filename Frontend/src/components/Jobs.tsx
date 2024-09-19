import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux';
import  { RootState } from '@/redux/store';
import { JOB_API_ENDPOINT } from '@/utils/constant';
import { setAllJobs } from '@/redux/jobSlice';


const Jobs: React.FC = () => {
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store: RootState) => store.job)
   useEffect(() => {
     const fetchJobs = async () => {
       try {
         const response = await fetch(`${JOB_API_ENDPOINT}/get`);
         if (!response.ok) {
           throw new Error("Network response was not ok");
         }
         const data = await response.json();
         console.log("Fetched Jobs:", data); // Log the fetched data

         // Check if jobs exist in the response
         if (data.jobs && Array.isArray(data.jobs)) {
           dispatch(setAllJobs(data.jobs)); // Dispatch the jobs array
         } else {
           console.error("Unexpected data structure:", data);
         }
       } catch (error) {
         console.error("Failed to fetch jobs:", error);
       }
     };

     fetchJobs();
   }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5 ">
          <div className=" w-1/5">
            <FilterCard />
          </div>
          {Array.isArray(allJobs) && allJobs.length > 0 ? (
            <div className="flex-1 h-[80vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <Job key={job._id} job={job} />
                ))}
              </div>
            </div>
          ) : (
            <span>Services not found</span>
          )}
            </div>
          </div>
        </div>
  );
};

export default Jobs
