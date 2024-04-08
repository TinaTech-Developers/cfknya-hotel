import OrderForm from "@/app/components/OrderForm";
import React from "react";

const getRoomById = async (id) => {
  try {
    const res = await fetch(`/api/rooms/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new error("Failed to create and order");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Booking({ params }) {
  const { id } = params;
  const { room } = await getRoomById(id);
  const { name, price, image, description } = room;
  return (
    <>
      <OrderForm
        id={id}
        name={name}
        price={price}
        description={description}
        image={image}
      />
    </>
  );
}
