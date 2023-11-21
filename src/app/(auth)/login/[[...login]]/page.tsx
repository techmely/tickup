import { SignIn } from "@clerk/nextjs";
import React from "react";

const LoginPage: React.FC = (props) => {
  return <SignIn redirectUrl="/dashboard" />;
};

export default LoginPage;
