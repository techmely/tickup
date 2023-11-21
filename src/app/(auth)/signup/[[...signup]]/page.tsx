import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage: React.FC = (props) => {
  return <SignUp redirectUrl="/dashboard" />;
};

export default SignUpPage;
