import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useSelector, useDispatch } from "react-redux";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { RootState } from "@/redux/store";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setLoading, setUser } from "@/redux/authSlice";
import { toast } from "sonner";

interface UpdateProfileDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const UpdateProfileDialog: React.FC<UpdateProfileDialogProps> = ({
  open,
  setOpen,
}) => {
  const loading = useSelector((state: RootState) => state.auth.loading);
  const { user } = useSelector((store: RootState) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
  });
  const [dialogClosedExternally, setDialogClosedExternally] = useState(false);
  const dispatch = useDispatch();

  const chagneEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error");
    } finally {
      dispatch(setLoading(false));
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!open && dialogClosedExternally) {
      window.location.reload(); // Reload the page if dialog was closed externally
    }
  }, [open, dialogClosedExternally]);

  const handleClose = () => {
    setDialogClosedExternally(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={chagneEventHandler}
                  className="col-span-3 p-3 w-full" // Updated class for larger input
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={chagneEventHandler}
                  className="col-span-3 p-3 w-full" // Updated class for larger input
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={chagneEventHandler}
                  type="text"
                  className="col-span-3 p-3 w-full" // Updated class for larger input
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  type="text"
                  value={input.bio}
                  onChange={chagneEventHandler}
                  className="col-span-3 p-3 w-full" // Updated class for larger input
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
          {/* Assuming you have a close button inside DialogHeader */}
          <button onClick={handleClose} className="close-button">
            &times;
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
