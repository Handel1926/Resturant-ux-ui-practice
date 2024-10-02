import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-svh w-full bg-grey-50 p-8 px-10 flex flex-col overflow-hidden ">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
