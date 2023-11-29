import { OrganizationProfile, auth } from "@clerk/nextjs";

const WorkspacePage: React.FC = (props) => {
  const { user, userId, organization } = auth();
  return (
    <div>
      WorkspacePage
      {/* <p>{user}</p> */}
      <p>{userId}</p>
      {organization && <p>{JSON.stringify(organization)}</p>}
    </div>
  );
};

export default WorkspacePage;
