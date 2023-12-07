import { CommandIcon, SearchIcon } from "lucide-react";
import { CommandMenu } from "./CommandMenu";

const SearchCommandPalette: React.FC = () => {
  return (
    <div className="relative inline-block bg-gray-500 rounded-md group">
      <div className="absolute top-2 left-2 z-[1]">
        <SearchIcon size="24" className="text-gray-500 group-hover:text-white" />
      </div>
      <Input className="relative pl-10" placeholder="Search ..." />
      <div className="absolute inline-flex justify-center items-center gap-1 top-2 right-2 z-[1] text-gray-500 group-hover:text-white">
        <CommandIcon size={20} className="" />
        <kbd className="text-lg">K</kbd>
      </div>
      <CommandMenu />
    </div>
  );
};

export default SearchCommandPalette;
