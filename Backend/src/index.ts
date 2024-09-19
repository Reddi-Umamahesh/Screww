import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "../routes/user.route";
import CompanyRoute from "../routes/company.route";
import JobRoute from "../routes/job.route";
import ConsultationRoute from "../routes/consultation.route";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import { METHODS } from "http";
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", CompanyRoute);
app.use("/api/v1/job", JobRoute);
app.use("/api/v1/consultation", ConsultationRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
