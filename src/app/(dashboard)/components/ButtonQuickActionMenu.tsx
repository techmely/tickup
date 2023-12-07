"use client";

import { GripIcon } from "lucide-react";
import React from "react";

const ButtonQuickActionMenu: React.FC = () => {
  const [isOpen, toggle] = useToggle(false);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            <GripIcon size="20" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Quick Action Menu</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonQuickActionMenu;
