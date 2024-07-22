import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)]">
      <Sidebar />

      <div className="h-screen flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
