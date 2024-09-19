import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import UpdateProfileDialog from './UpdateProfileDialog'
import PreviousBookings from './PreviousBookings'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Profile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const {user} = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 my-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 ">
              <AvatarImage src={user?.profile?.profilePhoto}></AvatarImage>
            </Avatar>

            <div>
              <h1 className="font-medium text-xl"> {user?.fullname} </h1>
              <p>{user?.profile?.bio || <span className='text-gray-700'>NA</span>}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right "
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{ user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Previous Bookings</h1>
        <PreviousBookings />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile