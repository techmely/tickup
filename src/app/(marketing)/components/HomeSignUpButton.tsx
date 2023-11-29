"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeSignUpButton: React.FC = (props) => {
  const router = useRouter();
  const navigateToSignUp = () => {
    router.push("/signup");
  };
  return (
    <Button
      type="button"
      className="relative h-[43px] bg-[#ffffff01] rounded-[9px] shadow-[0px_10px_25px_#7b68ee66] hover:bg-violet-600"
      onClick={navigateToSignUp}
    >
      Sign Up
    </Button>
  );
};

export default HomeSignUpButton;
