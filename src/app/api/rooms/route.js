import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Rooms from "../../../../models/rooms";

export async function POST(request) {
  const { name, description, price, imageUrl, roomType } = await request.json();
  await connectMongoDB();
  await Rooms.create({ name, description, price, imageUrl, roomType });

  return NextResponse.json({ message: "Room created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const rooms = await Rooms.find();
  return NextResponse.json({ rooms });
}
