import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Rooms from "../../../../../models/rooms";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: title,
    newDescription: description,
    newImage: image,
    newPrice: price,
  } = await request.json();
  await connectMongoDB();
  await Rooms.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const room = await Rooms.findOne({ _id: id });
  return NextResponse.json({ room }, { status: 200 });
}
