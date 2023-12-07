import { PlusSquareIcon } from "lucide-react";

const ButtonActionNew: React.FC = (props) => {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2 z-[1]">
        <PlusSquareIcon size="24" className="text-gray-500 group-hover:text-white" />
      </div>
      <Button className="relative">New</Button>
    </div>
  );
};

export default ButtonActionNew;
