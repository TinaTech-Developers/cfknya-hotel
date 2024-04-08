import BarChart from "@/app/components/BarChart";
import DashbordLayout from "@/app/components/DashbordLayout";
import Header from "@/app/components/Header";
import RecentOrders from "@/app/components/RecentOrders";
import TopCards from "@/app/components/TopCards";
import React from "react";

function Home() {
  return (
    <DashbordLayout>
      <main className=" bg-gray-200  min-h-screen w-full">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </DashbordLayout>
  );
}

export default Home;
