import { PlusSquareIcon } from "lucide-react";

const ButtonActionNew: React.FC = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation> */}
            <span tabIndex={0}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="relative text-lg">
                  <PlusSquareIcon size="24" className="text-white mr-2" />
                  New
                </Button>
              </DialogTrigger>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Create Item</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">Tickup AI Helper</DialogTitle>
          <Input placeholder="Bạn muốn AI viết gì cho bạn nào?" />
        </DialogHeader>
        <div className="grid gap-4 py-4">Hello AI</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonActionNew;
