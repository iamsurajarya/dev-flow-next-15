import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="relative">{children}</main>;
};

export default AuthLayout;
