import React, { PropsWithChildren } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-[#2a2f34]">
      <DashboardHeader />
      <div className="flex mt-16">
        <DashboardSidebar />
        <main className="w-full h-screen flex items-center justify-center">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
