"use client";

import React from "react";

const ButtonAI: React.FC = (props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5 20v-5.654h14V20H5Zm4.288-7.423q-1.78 0-3.034-1.254T5 8.288q0-1.78 1.254-3.034T9.288 4h5.424q1.78 0 3.034 1.254T19 8.288q0 1.78-1.254 3.035q-1.255 1.254-3.034 1.254H9.288ZM6 19h12v-3.654H6V19Zm3.288-7.423h5.424q1.384 0 2.336-.952T18 8.288q0-1.384-.952-2.336T14.712 5H9.288q-1.384 0-2.336.952T6 8.288q0 1.385.952 2.337q.952.952 2.336.952Zm0-2.558q.31 0 .52-.21t.211-.52q0-.31-.21-.52t-.52-.211q-.31 0-.52.21t-.211.52q0 .31.21.52t.52.211Zm5.423 0q.31 0 .52-.21t.211-.52q0-.31-.21-.52t-.52-.211q-.31 0-.52.21t-.211.52q0 .31.21.52t.52.211ZM12 19Zm0-10.712Z"
              />
            </svg>
            AI
          </Button>
        </DialogTrigger>
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
    </>
  );
};

export default ButtonAI;
