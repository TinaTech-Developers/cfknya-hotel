import Image from "next/image";

import React, { useEffect, useState } from "react";

// const getRoomById = async (id) => {
//   try {
//     const res = await fetch(`/api/rooms/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new error("Failed to create and order");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

function BookModal({ params }, { isVisible, onClose }) {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/rooms/${id}`);
      const rooms = await response.json();
      setRoom(rooms.rooms);
    }
    fetchData();
  }, []);

  if (!isVisible) return null;
  const { id } = params;
  // const { room } = await getRoomById(id);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded ">
          <p className="p-2 text-xl font-semibold">Events Details</p>
          <div className="grid grid-cols-2">
            <Image
              src={
                "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg"
              }
              height={300}
              width={250}
            />
            <div className="text-sm">
              <div className="grid grid-cols-4 gap-4 py-2">
                <label className="col-span-1 font-semibold">{id}</label>
                <p className="col-span-3 text-gray-600">Cyber Security</p>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <label className="col-span-1 font-semibold">Date:</label>
                <p className="col-span-3 text-gray-600">27 Oct 2023</p>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <label className="col-span-1 font-semibold">Time:</label>
                <p className="col-span-3 text-gray-600">08:00</p>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <label className="col-span-1 font-semibold">Venue:</label>
                <p className="col-span-3 text-gray-600">Victoria Falls</p>
              </div>
              <div className="grid grid-cols-4 gap-4 py-2">
                <label className="col-span-1 font-semibold">Description:</label>
                <p className="col-span-3 text-gray-600 mx-6">
                  Rebranding of Compilink Systems, launch of a new logo and
                  content to affect the Company in the next coming years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookModal;
