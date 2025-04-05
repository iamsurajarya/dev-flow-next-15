import React, { ReactNode } from "react";

import Navbar from "@/components/ui/navigation/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
