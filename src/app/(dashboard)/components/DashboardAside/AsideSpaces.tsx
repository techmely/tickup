import { PlusIcon, SearchIcon } from "lucide-react";
import React from "react";

const AsideSpaces: React.FC = () => {
  return (
    <div className="group flex items-center justify-between py-2 pl-4">
      <span className="text-lg text-gray-400 py-1.5">Spaces</span>
      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden group-hover:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm-84-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm136 0a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
                  />
                </svg>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Space Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden group-hover:block">
                <SearchIcon size="20" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Search</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden group-hover:block">
                <PlusIcon size="20" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>New Spaces</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default AsideSpaces;
