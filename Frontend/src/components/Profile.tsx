import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'

import PreviousBookings from './PreviousBookings'

const Profile: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 my-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 ">
              <AvatarImage src="https://imgs.search.brave.com/WmuJAHYmcLP1d_dVZPZl76v7SaQdxAh8UvjjqLHz-tM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvY2Ft/ZXJhLW91dGxpbmUt/bG9nby1kZXNpZ25f/MjMtMjE1MTI2Mzk4/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"></AvatarImage>
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">FullName </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button className="text-right " variant="outline">
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>uma@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9988798978</span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Previous Bookings</h1>
        <PreviousBookings />
      </div>
    </div>
  );
};

export default Profile