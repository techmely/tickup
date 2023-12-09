import React, { PropsWithChildren } from "react";
import DashboardSidebar from "./DashboardSidebar";
import MainTopBar from "./MainTopBar";

const DashboardMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full h-main-container-height">
      <DashboardSidebar />
      <main data-testid="top-bar-container" className="flex flex-col h-full relative w-full">
        <MainTopBar />
        <div className="main-background absolute top-0 left-0 w-full h-full bg-[url('/images/dashboard/background-dark.png')] bg-no-repeat bg-contain pointer-events-none" />
        <div className="flex flex-col h-full relative overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardMain;
