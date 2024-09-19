import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { IJob } from '@/Interfaces/job'


const Job:React.FC<{job:IJob}> = ({job}) => {
  const navigate = useNavigate();
  const jobId  = '12asfdiouornvancasdonhy'
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className=" text-sm text-gray-500">{job?.previousWorks?.length} calls</p>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className=" flex items-center gap-2 my-2">
        <Button variant="outline" size="icon" className="p-6">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/WmuJAHYmcLP1d_dVZPZl76v7SaQdxAh8UvjjqLHz-tM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvY2Ft/ZXJhLW91dGxpbmUt/bG9nby1kZXNpZ25f/MjMtMjE1MTI2Mzk4/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{ job?.company?.name}</h1>
          <p className="text-sm text-grey-500">{job?.location }</p>
        </div>
      </div>
      <div>
        <h1 className=" font-bold text-lg my-2">{ job?.title}</h1>
        <p className="text-sm text-gray-600 ">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-[#6A38C2] font-bold"} variant="secondary">
          {job?.jobCategory}
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="secondary">
          { job?.experience}
        </Badge>

        <Badge className={"text-[#7209b7] font-bold"} variant="secondary">
          {job?.fee}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Book Now</Button>
      </div>
    </div>
  );
}

export default Job