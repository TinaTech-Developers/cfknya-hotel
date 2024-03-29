import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    fullname: String,
    phone: String,
    arrivaldate: String,
    deptdate: String,
    roomtype: String,
    guests: String,
    email: String,
    message: String,
    period: String,
    payment: String,
    newPrice: String,
    newName: String,
  },
  { timestamps: true }
);

const Reservations =
  mongoose.models.Reservations ||
  mongoose.model("Reservations", reservationSchema);

export default Reservations;
