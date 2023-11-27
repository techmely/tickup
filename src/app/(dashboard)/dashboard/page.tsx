"use client";

import { OrganizationList, useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage: React.FC = (props) => {
  const { user } = useUser();
  return (
    <div className="container w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl">Dashboard Page</h1>
      <p className="text-base">
        {JSON.stringify({ email: user?.emailAddresses, name: user?.fullName })}
      </p>
      {user?.imageUrl && <img width={50} src={user?.imageUrl} alt="User" />}
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/workspace/:id"
        afterSelectOrganizationUrl="/workspace/:id"
      />
    </div>
  );
};

export default DashboardPage;
