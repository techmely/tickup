"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeLoginButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToLogin = () => {
    router.push("/login");
  };
  return (
    <Button
      type="button"
      className="relative h-[43px] bg-[#e9ebf0] text-gray-900 rounded-[9px] shadow-[0px_10px_25px_#7b68ee66] hover:bg-gray-300"
      onClick={navigateToLogin}
    >
      Login
    </Button>
  );
};

export default HomeLoginButton;
