import express, { Router } from "express";
import {
  bookService,
  getBookedServices,
  getCustomers,
  updateRating,
} from "../controller/consultation.controller";
import isAuthenticated from "../middlewares/isAuthenticated";

const router: Router = express.Router();
router.route("/apply/:id").get(isAuthenticated, bookService);
router.route("/get").get(isAuthenticated, getBookedServices);
router.route("/:id/get").get(isAuthenticated, getCustomers);
router.route("/rating/:id/update").post(isAuthenticated, updateRating);

export default router;
