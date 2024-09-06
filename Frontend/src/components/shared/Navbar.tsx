import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {  LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const user =false;
  return (
    <div>
      <div className="flex justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold ">Screww</h1>
        </div>
        <div className="flex items-center gap-12 ">
          <ul className="flex font-medium items-center gap-5">
            <li> Home</li>
            <li> Services</li>
            <li> Browse</li>
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
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 ">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Reddi's Home</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex-col text-gray-600 my-2">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">logout</Button>
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
