import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="w-full h-screen flex items-center justify-center">{children}</main>;
};

export default AuthLayout;
