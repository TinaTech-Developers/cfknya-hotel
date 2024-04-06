import React from "react";

const getOrders = async () => {
  try {
    const res = await fetch("/api/orders", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading orders", error);
  }
};

export default async function TopCards() {
  // const { orders } = await getOrders();  const price = orders.newPrice;

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 mt-10">
      <div className=" lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">13365</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+8%</span>
        </p>
      </div>
      <div className=" lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$7,123,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+78%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$27,846</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+48%</span>
        </p>
      </div>
    </div>
  );
}
