import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-full h-screen flex items-center justify-center">{children}</div>;
};

export default AuthLayout;
