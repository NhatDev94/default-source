import { ReactNode } from "react";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-[100dvh] bg-gray-200">
      <div className="fixed top-0 left-0 z-50">
        <Header />
      </div>
      <div className="pt-14 w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
