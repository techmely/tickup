"use client";

import { SidebarIcon } from "lucide-react";

const ButtonToggleSidebar = forwardRef<HTMLButtonElement>(function XXX(props, ref) {
  const preferences = usePreferencesState();

  const handleToggleSidebar = () => {
    preferences.toggleOpenSidebar(true);
  };

  if (preferences.isOpenSidebar) return <div />;

  return (
    <Button ref={ref} variant="ghost" size="sm" onClick={handleToggleSidebar} {...props}>
      <SidebarIcon size="20" />
    </Button>
  );
});

export default ButtonToggleSidebar;
