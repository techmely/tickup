import AsideNavigateMenus from "./DashboardAside/AsideNavigateMenus";
import AsideSpaces from "./DashboardAside/AsideSpaces";
import AsideSupports from "./DashboardAside/AsideSupports";
import AsideWorkspaceSelection from "./DashboardAside/AsideWorkspaceSelection";

const DashboardSidebar: React.FC = (props) => {
  const preferences = usePreferencesState();
  return (
    <Collapsible open={preferences.isOpenSidebar} onOpenChange={preferences.toggleOpenSidebar}>
      <CollapsibleContent asChild>
        <aside className="h-full bg-[#30343b] data-[state=open]:animate-collapsible-w-down data-[state=closed]:animate-collapsible-w-up">
          <AsideWorkspaceSelection />
          <AsideNavigateMenus />
          <AsideSpaces />
          <AsideSupports />
        </aside>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DashboardSidebar;
