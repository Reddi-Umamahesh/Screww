import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {  LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  { RootState } from "@/redux/store";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar: React.FC = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`, {withCredentials: true})
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
      
    } catch (error) {
      console.error(error);
       if (error instanceof Error) {
         toast.error(error.message || "An unknown error occurred");
       } else {
         toast.error("An unknown error occurred");
       }
    }
  }
  return (
    <div>
      <div className="flex justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold ">Screww</h1>
        </div>
        <div className="flex items-center gap-12 ">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/services"> Services</Link>
            </li>
            <li>
              <Link to="/browse"> Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div>
              <Link to="/login">
                <Button variant="link">login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  SignUP
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="curser-pointer">
                  <AvatarImage src={user.profile?.profilePhoto} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 ">
                <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={ user.profile?.profilePhoto} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                      <h4 className="font-medium">{ user.fullname}'s Home</h4>
                    <p className="text-sm text-muted-foreground">
                      {user.profile?.bio || ''}
                    </p>
                  </div>
                </div>
                <div className="flex-col text-gray-600 my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                      <Button variant="link">
                        <Link to='/profile'>view profile</Link>
                    </Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                      <Button
                    onClick={logoutHandler}    variant="link">logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
