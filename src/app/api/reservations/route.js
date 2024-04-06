import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Reservations from "../../../../models/reservations";

export async function POST(request) {
  const {
    name,
    surname,
    address,
    country,
    email,
    arrivaldate,
    deptdate,
    kidsNo,
    adultsNo,
    book,
    price,
    total,
  } = await request.json();
  await connectMongoDB();
  await Reservations.create({
    name,
    surname,
    address,
    country,
    email,
    arrivaldate,
    deptdate,
    kidsNo,
    adultsNo,
    book,
    price,
    total,
  });

  return NextResponse.json({ message: "Reservation Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const reservations = await Reservations.find();
  return NextResponse.json({ reservations });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Reservations.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Reservation Successfully Deleted" },
    { status: 200 }
  );
}
