"use client";
import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const options = [{ value: "Cash", label: "Cash" }];

function OrderForm({ id, name, price, description, image }) {
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const [value, setValue] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [period, setPeriod] = useState("");
  const [payment, setPayment] = useState("");
  const [email, setEmail] = useState("");

  function handleSelect(event) {
    setValue(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !phone || !period || !email) {
      alert("Fill all fields");
      return;
    }
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          phone,
          period,
          payment,
          newName,
          email,
          newPrice,
        }),
      });
      if (res.ok) {
        onClick();
      }
    } catch (error) {
      console.log("Error ");
    }
  };

  const onClick = () => {
    toast("Your Booking Was Successful, We will respond to your email", {
      type: "success",
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-10 pt-20 mx-24">
          <div className="w-96 h-full py-6 mt-24 border">
            <h1 className="text-center text-green-800">
              Fill in the form below and click check out.....
            </h1>
            <div className="flex flex-col items-center pt-6 ">
              <label className="text-start">FullName</label>
              <input
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                name="name"
                className="w-[90%] bg-slate-50 p-1 outline-none border-b-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col items-center pt-6 ">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="w-[90%] bg-slate-50 p-1 outline-none border-b-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col items-center pt-6 ">
              <label>Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                className="w-[90%] bg-slate-50 p-1 outline-none border-b-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col items-center pt-6 ">
              <label>Period</label>
              <input
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                type="text"
                name="period"
                placeholder="11 Jan - 18 Jan"
                className="w-[90%] bg-slate-50 p-1 outline-none border-b-2 border-gray-400"
              />
            </div>
            <div className="flex flex-col items-center pt-6 ">
              <label>Payment Method</label>
              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-[90%] bg-slate-50 p-1 outline-none border-b-2 border-gray-400"
              >
                <option value={"Cash"}>Cash</option>
                <option value={"CreditCard"}>Credit Card</option>
              </select>
            </div>
          </div>
          <div
            className="flex flex-col items-start 
     max-w-2xl ustify-center md:w-full md:mx-auto "
          >
            <p className="text-3xl font-bold pb-4">Ticket Details</p>
            <div className="h-full py-8 my-2 w-full flex justify-center items-center">
              <div className="h-full w-full md:w-[90%] p-8  border ">
                <div className="flex flex-col mt-6 gap-4">
                  <div className="grid grid-cols-4 gap-4 items-center justify-center">
                    <p className="font-bold text-sm col-span-1">Room Name: </p>
                    <input
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      // value={newName}
                      // onChange={(e) => setNewName(e.target.value)}
                      className="bg-gray-50 py-2 px-4 rounded-lg text-sm w-full outline-none border-none col-span-3"
                    />
                    {/* //   {name}
                    // </div> */}
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center justify-center">
                    <p className="font-bold text-sm col-span-1">Price:</p>
                    <p
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="bg-gray-50 py-2 px-4 text-sm rounded-lg w-full outline-none border-none col-span-3"
                    >
                      USD {price}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center justify-center">
                    <p className="font-bold text-sm col-span-1">Room Info:</p>
                    <p
                      rows={5}
                      className="bg-gray-50 py-2 px-4  w-full outline-none border-none col-span-3"
                    >
                      {description}
                    </p>
                  </div>
                  <Image src={image} alt="" className="pt-6 w-96 h-80" />
                  <div className="flex items-end">
                    <button
                      type="submit"
                      className=" border relative py-2 px-6  bg-transparent text-gray-700 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default OrderForm;
