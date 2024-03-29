"use client";
import HeroSection from "@/app/components/HeroSection";
import React, { useState } from "react";
import RoomCard from "@/app/components/RoomCard";
import FillButton from "@/app/components/FillButton";
import View from "@/app/components/View";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/app/components/Layout";

function Reservation() {
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivaldate, setArrivaldate] = useState("");
  const [deptdate, setDeptdate] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [guests, setGuests] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !fullname ||
      !arrivaldate ||
      !deptdate ||
      !roomtype ||
      !guests ||
      !email ||
      !message
    ) {
      alert("Fill all fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          phone,
          arrivaldate,
          deptdate,
          roomtype,
          guests,
          email,
          message,
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
      <div className="pt-16">
        <HeroSection
          title={"Reservation"}
          subtitle={"Reserve Your Laxurious Room Now!!!"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center py-20 mx-10">
            <h1 className="text-2xl md:text-4xl py-10 pb-0">
              Reservation Form
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-cente justify-center "
            >
              <div className="flex flex-col items-start justify-center pt-8">
                <label className="text-gray-500">Full Name</label>
                <input
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="fullname"
                  className="w-[480px] p-1 border border-gray-500 outline-none"
                />
              </div>

              <div className="flex flex-col items-start justify-center pt-8">
                <label className="text-gray-500">Phone</label>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                  className="w-[480px] p-1 border border-gray-500 outline-none"
                />
                {/* <input
                value={phone}
                placeholder="0771234567"
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                className="w-[480px] p-1 border border-gray-500 outline-none"
              /> */}
              </div>
              <div className="flex items-center justify-center gap-8 pt-8">
                <div className="flex flex-col items-start justify-center">
                  <label className="text-gray-500">Arrival Date</label>
                  <input
                    value={arrivaldate}
                    onChange={(e) => setArrivaldate(e.target.value)}
                    type="date"
                    name="arrivaldate"
                    className="w-56 p-1 border border-gray-500 outline-none"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="text-gray-500">Departure Date</label>
                  <input
                    value={deptdate}
                    onChange={(e) => setDeptdate(e.target.value)}
                    type="date"
                    name="deptdate"
                    className="w-56 p-1 border border-gray-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center pt-8 gap-8">
                <div className="flex flex-col items-start justify-center">
                  <label className="text-gray-500">Room</label>
                  <input
                    // options={rooms}
                    placeholder="2 Rooms"
                    name="roomtype"
                    className="w-56 p-1 border border-gray-500 outline-none"
                    value={roomtype}
                    onChange={(e) => setRoomtype(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <label className="text-gray-500">Guests</label>
                  <input
                    // options={guests}
                    placeholder="4 Guests"
                    value={guests}
                    name="guests"
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-56 p-1 border border-gray-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center pt-8">
                <label className="text-gray-500">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="w-[480px] p-1 border border-gray-500 outline-none"
                />
              </div>
              <div className="flex flex-col items-start justify-center pt-8">
                <label className="text-gray-500">Write A Note</label>
                <textarea
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Note"
                  className="peer h-full min-h-[200px] p-2 w-[480px] resize-none border border-blue-gray-200 bg-transparent pt-2 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                ></textarea>
              </div>
              <div className="flex flex-col items-end pt-6">
                <button
                  type="submit"
                  className=" border relative py-2 px-6  bg-transparent text-gray-700 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-2xl md:text-4xl py-10">Featured Room</h1>
            {/* <RoomCard
              image={"/IMG-20231122-WA0060.jpg"}
              type={"Maple Manor"}
              desc={
                "The definition of cosy. This villa is not a brick short from the being the warmest villa you can ever find. Words could never do it justice."
              }
            /> */}
          </div>
        </div>
        <View />
      </div>
    </Layout>
  );
}

export default Reservation;
