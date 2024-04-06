"use client";
import React, { useEffect, useState } from "react";
import FillButton from "./FillButton";
import { FaPeopleRoof } from "react-icons/fa6";
import Image from "next/image";
import Modal from "./Modal";
import RoomInfo from "./RoomInfo";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function RoomCard() {
  let [currentDate, setCurrentDate] = useState(getDate(true));
  const ROOM_URL = "/api/rooms";
  const datez = [
    "01/04/2024",
    "01/01/2024",
    "02/21/2024",
    "04/18/2024",
    "05/01/2024",
    "05/25/2024",
    "12/22/2024",
    "12/25/2024",
    "12/26/2024",
  ];

  const [rooms, setRooms] = useState([]);

  // const [modeldata, setModeldata] = useState({
  //   id: "",
  //   userName: "",
  //   username: "",
  //   email: "",
  //   website: "",
  // });

  // const getData = () => {
  //   fetch(ROOM_URL)
  //     .then((resposne) => resposne.json())
  //     .then((rooms) => setRooms(rooms.rooms));
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // const showDetail = (id) => {
  //   fetch(`/api/rooms/${id}`)
  //     .then((resposne) => resposne.json())
  //     .then((rooms) => setModeldata(rooms.rooms));
  // };

  const handleBook = () => {};

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(ROOM_URL);
      const rooms = await response.json();
      setRooms(rooms.rooms);
    }
    fetchData();
  }, []);

  return (
    <>
      {rooms.map((room) => {
        if (datez.includes(currentDate)) {
          room.price = Number(room.price) + 80;
        }

        return <RoomInfo key={room.id} room={room} />;
      })}
    </>
  );
}

export default RoomCard;
