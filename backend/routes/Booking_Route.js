import express from "express";
import { Add_New_Booking } from "../controller/BookingCreate.js";
const bookingRouter = express.Router();
bookingRouter.post("/", Add_New_Booking);
export default bookingRouter;
