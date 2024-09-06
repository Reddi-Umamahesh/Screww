import React, { useState, FormEvent } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group"; // Ensure this import is correct
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup: React.FC = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    password: "",
    role: "",
    file: undefined as File | undefined,
  });

  const navigate = useNavigate(); // Ensure useNavigate is called correctly

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phonenumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    console
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">SignUp</h1>
          <div className="my-2">
            <Label>FullName</Label>
            <Input
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              type="email"
              placeholder="xyz@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              name="phonenumber"
              value={input.phonenumber}
              onChange={changeEventHandler}
              type="text"
              placeholder="8182833231"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              className="flex items-center gap-4 my-5"
              defaultValue="User"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="User"
                  checked={input.role === "User"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r1">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Professional"
                  checked={input.role === "Professional"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r2">Professional</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link className="text-blue-600" to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
