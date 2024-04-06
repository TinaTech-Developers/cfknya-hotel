"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete");
    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTopic}>
      <HiOutlineTrash size={24} color="red" />
    </button>
  );
}

export default RemoveBtn;
