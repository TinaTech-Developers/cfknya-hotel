import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    name: String,
    surname: String,
    address: String,
    country: String,
    email: String,
    arrivaldate: String,
    deptdate: String,
    kidsNo: String,
    adultsNo: String,
    book: String,
    price: String,
    total: String,
  },
  { timestamps: true }
);

const Reservations =
  mongoose.models.Reservations ||
  mongoose.model("Reservations", reservationSchema);

export default Reservations;
