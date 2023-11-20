"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";
import React from "react";

const HomeLoginButton: React.FC = (props) => {
  const router = useRouter();

  const navigateToLoginPage = () => {
    router.push("/login");
  };
  return (
    <Button size="md" className="px-10 block" onClick={navigateToLoginPage}>
      Go to the login page
    </Button>
  );
};

export default HomeLoginButton;
