import { ChevronRightIcon, PinIcon } from "lucide-react";
import React from "react";

const AsideFavorites: React.FC = () => {
  const handlePinFavorites = () => {};

  return (
    <div className="group flex items-center justify-between py-2">
      <Button variant="ghost" className="text-lg font-normal text-gray-400">
        <span>Favorites</span>
        <ChevronRightIcon size={20} />
      </Button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="hidden group-hover:block"
              onClick={handlePinFavorites}
            >
              <PinIcon size="20" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Pin favorites to Top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default AsideFavorites;
