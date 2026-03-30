import { Outlet} from "react-router-dom";
import { lazy, useEffect, useState } from "react";
const Sidebar = lazy(() => import('./Sidebar'));
const Header = lazy(() => import('./Header'));


export default function DashboardLayout() {

  const [sideOpen, setSideOpen] = useState(true);
  const [isHoverOpen, setIsHoverOpen] = useState(false);
  const isOpen = sideOpen || isHoverOpen;

  useEffect(() => {
      document.querySelector("main").scrollTo({
        top : 0,
        behavior : "smooth"
      })
      if (window.innerWidth < 1200) {
        setIsHoverOpen(false)
        setSideOpen(false);
      }
  }, [location])

  return (
    <div className={`flex h-screen bg-gray-50 ${isOpen ? "xl:ml-[290px]" : "xl:ml-[90px]"} dark:bg-gray-900 duration-300`}>
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} isOpen={isOpen} setIsHoverOpen={setIsHoverOpen} />
      <div className="flex flex-col flex-1">
        <Header sideOpen={sideOpen} setSideOpen={setSideOpen} isOpen={isOpen} setIsHoverOpen={setIsHoverOpen}  />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
