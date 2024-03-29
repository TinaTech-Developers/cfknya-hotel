"use client";
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calender() {
  return (
    <>
      <div className="pt-7">
        <div className="w-full md:col-span-2 relative ld:h-[70vh] h-[26vh]  m-auto p-4 border rounded bg-white">
          <div className="w-64 h-72 text-xs text-center p-4 ">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calender;
