import { OrganizationProfile, auth } from "@clerk/nextjs";
import React from "react";

const WorkspacePage: React.FC = (props) => {
  const { user, userId, organization } = auth();
  return (
    <div>
      WorkspacePage
      {/* <p>{user}</p> */}
      <p>{userId}</p>
      {organization && <p>{JSON.stringify(organization)}</p>}
      <OrganizationProfile />
    </div>
  );
};

export default WorkspacePage;
