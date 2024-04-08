import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AuthProvider } from "@/app/Providers";

export default function DashbordLayout({ children }) {
  return (
    <AuthProvider>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        {children}
      </div>
    </AuthProvider>
  );
}
