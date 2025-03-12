import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-full h-screen">
      <Header />

      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
