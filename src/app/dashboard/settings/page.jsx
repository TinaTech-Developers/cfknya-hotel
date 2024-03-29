import DashbordLayout from "@/app/components/DashbordLayout";
import Header from "@/app/components/Header";
import React from "react";
import MiniHeader from "../components/MiniHeader";

function Settings() {
  return (
    <DashbordLayout>
      <main className=" bg-gray-200  min-h-screen w-full">
        <Header />
        <MiniHeader />
      </main>
    </DashbordLayout>
  );
}

export default Settings;
