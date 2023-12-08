import { useOrganization } from "@clerk/nextjs";
import { ChevronDownIcon, SidebarIcon } from "lucide-react";
import React from "react";

const AsideWorkspaceSelection: React.FC = (props) => {
  const { organization } = useOrganization();
  const preferences = usePreferencesState();

  const handleCloseSidebar = () => {
    preferences.toggleOpenSidebar(false);
  };

  return (
    <div className="flex items-center justify-between p-4 shadow">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <div className="flex gap-1 items-center">
              {organization?.imageUrl && (
                <img width={20} height={20} src={organization?.imageUrl} alt={organization.name} />
              )}
              <p className="text-xl">{organization?.name}</p>
              <ChevronDownIcon size={20} />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm" className="" onClick={handleCloseSidebar}>
              <SidebarIcon size="20" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Collapse sidebar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default AsideWorkspaceSelection;
