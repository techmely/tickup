import { UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage: React.FC = (props) => {
  return (
    <div>
      DashboardPage
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
