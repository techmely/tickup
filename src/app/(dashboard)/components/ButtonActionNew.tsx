import { PlusSquareIcon } from "lucide-react";

const ButtonActionNew: React.FC = (props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="relative">
            <PlusSquareIcon size="20" className="text-gray-500 group-hover:text-white mr-2" />
            New
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create Item</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ButtonActionNew;
