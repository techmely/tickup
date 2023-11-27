import React from "react";

const DashboardHeader: React.FC = (props) => {
  return (
    <header id="header" className="fixed top-0 left-0 w-full shadow py-6">
      <div className="w-full flex text-xs">
        <div>Logo Tickup</div>
        <div>Search the whole project</div>
        <div>Upgrade subscription</div>
        <div>Button Create everything</div>
        <div>Quick Actions Menu Button</div>
        <div>User Menu</div>
      </div>
    </header>
  );
};

export default DashboardHeader;
