import express, { Router } from "express";
import {
  postJob,
  getAllJobs,
    getJobById,
  getAdminJob,
} from "../controller/job.controller";
import isAuthenticated from "../middlewares/isAuthenticated";

const router: Router = express.Router();
router.route("/post").post(isAuthenticated,postJob );
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJob);
router.route("/get/:id").get(isAuthenticated, getJobById);


export default router;
