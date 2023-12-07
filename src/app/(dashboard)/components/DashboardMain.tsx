"use client";

import React, { PropsWithChildren } from "react";
import DashboardSidebar from "./DashboardSidebar";

const DashboardMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full h-[calc(100%-72px)]">
      <DashboardSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardMain;
