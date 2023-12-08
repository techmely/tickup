import AsideNavigateMenus from "./DashboardAside/AsideNavigateMenus";
import AsideSpaces from "./DashboardAside/AsideSpaces";
import AsideSupports from "./DashboardAside/AsideSupports";
import AsideWorkspaceSelection from "./DashboardAside/AsideWorkspaceSelection";

const DashboardSidebar: React.FC = (props) => {
  const preferences = usePreferencesState();
  return (
    <Collapsible open={preferences.isOpenSidebar} onOpenChange={preferences.toggleOpenSidebar}>
      <CollapsibleContent asChild>
        <aside className="flex flex-col h-full w-[300px] bg-[#30343b] data-[state=open]:animate-collapsible-w-down data-[state=closed]:animate-collapsible-w-up">
          <AsideWorkspaceSelection />
          <ScrollArea className="grow">
            <AsideNavigateMenus />
            <SelectSeparator />
            <AsideSpaces />
          </ScrollArea>
          <AsideSupports />
        </aside>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DashboardSidebar;
