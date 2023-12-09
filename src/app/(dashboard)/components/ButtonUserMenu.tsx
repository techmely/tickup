"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const ButtonUserMenu: React.FC = () => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          {user?.imageUrl && (
            <NImage
              src={user?.imageUrl}
              width={30}
              height={30}
              alt="User Avatar"
              className="rounded-full"
            />
          )}
          {!user?.imageUrl && (
            <div className="p-4 rounded-full bg-green-400">{user?.username?.charAt?.(0)}</div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonUserMenu;
