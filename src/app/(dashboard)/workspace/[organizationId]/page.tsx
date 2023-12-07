"use client";

import { useAuth } from "@clerk/nextjs";

const WorkspacePage: React.FC = (props) => {
  const { userId } = useAuth();
  const preferences = usePreferencesState();

  const handleToggleSidebar = () => {
    preferences.toggleOpenSidebar(true);
  };

  return (
    <div>
      {!preferences.isOpenSidebar && <Button onClick={handleToggleSidebar}>Open SIDEBAR</Button>}
      WorkspacePage
      {/* <p>{user}</p> */}
      <p>{userId}</p>
    </div>
  );
};

export default WorkspacePage;
