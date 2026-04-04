import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Sidebar({sideOpen, setIsHoverOpen, isOpen, setSideOpen}){
    const location = useLocation();
    const {logout} = useContext(AuthContext);
    const pathname = location.pathname;
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMenu = (id) => {
        setActiveMenu(activeMenu===id ? null : id)
    }
    const isActiveParent = (basePath) => {
      return pathname.startsWith(basePath);
    };

    useEffect(() => {
        setActiveMenu(null)
    }, [location])

    const menuArray = [
        {name : "Dashboard", slug : "/", icon : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 group-hover:text-gray-700 group-[.active]:text-white dark:group-hover:text-gray-300"><path d="M5.5 3.25C4.25736 3.25 3.25 4.25736 3.25 5.5V8.99998C3.25 10.2426 4.25736 11.25 5.5 11.25H9C10.2426 11.25 11.25 10.2426 11.25 8.99998V5.5C11.25 4.25736 10.2426 3.25 9 3.25H5.5ZM4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75H9C9.41421 4.75 9.75 5.08579 9.75 5.5V8.99998C9.75 9.41419 9.41421 9.74998 9 9.74998H5.5C5.08579 9.74998 4.75 9.41419 4.75 8.99998V5.5ZM5.5 12.75C4.25736 12.75 3.25 13.7574 3.25 15V18.5C3.25 19.7426 4.25736 20.75 5.5 20.75H9C10.2426 20.75 11.25 19.7427 11.25 18.5V15C11.25 13.7574 10.2426 12.75 9 12.75H5.5ZM4.75 15C4.75 14.5858 5.08579 14.25 5.5 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V18.5C9.75 18.9142 9.41421 19.25 9 19.25H5.5C5.08579 19.25 4.75 18.9142 4.75 18.5V15ZM12.75 5.5C12.75 4.25736 13.7574 3.25 15 3.25H18.5C19.7426 3.25 20.75 4.25736 20.75 5.5V8.99998C20.75 10.2426 19.7426 11.25 18.5 11.25H15C13.7574 11.25 12.75 10.2426 12.75 8.99998V5.5ZM15 4.75C14.5858 4.75 14.25 5.08579 14.25 5.5V8.99998C14.25 9.41419 14.5858 9.74998 15 9.74998H18.5C18.9142 9.74998 19.25 9.41419 19.25 8.99998V5.5C19.25 5.08579 18.9142 4.75 18.5 4.75H15ZM15 12.75C13.7574 12.75 12.75 13.7574 12.75 15V18.5C12.75 19.7426 13.7574 20.75 15 20.75H18.5C19.7426 20.75 20.75 19.7427 20.75 18.5V15C20.75 13.7574 19.7426 12.75 18.5 12.75H15ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15V18.5C19.25 18.9142 18.9142 19.25 18.5 19.25H15C14.5858 19.25 14.25 18.9142 14.25 18.5V15Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>, 
            children : false
        },

    ]

    useEffect(() => {
        const handler = () => {
            if (window.innerWidth < 1200) {
                setIsHoverOpen(false)
                setSideOpen(false);
            }else{
                setIsHoverOpen(true)
                setSideOpen(true);                
            }
        };
        handler()
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <>
            <aside className={`bg-white fixed top-0 left-0 z-20 border-r border-gray-200 h-screen shadow-xs duration-300 dark:bg-gray-900 dark:border-gray-800 ${isOpen ? "w-[290px] px-5" : " md:-translate-x-full w-0 px-0 lg:w-[90px] lg:px-5 "} xl:translate-x-0`}
                onMouseEnter={() => {
                    if (!sideOpen) setIsHoverOpen(true);
                }}
                onMouseLeave={() => {
                    if (!sideOpen) setIsHoverOpen(false);
                }}
            >
                <div className="py-8">
                    <Link to="/" className={`flex items-center gap-2 ${isOpen ? "justify-start" : "justify-center"}`}>
                        <img src="/assets/images/Vyasa_logo_with_stethoscope_design-removebg-preview.png" className="w-8 h-8" alt="" />
                        {isOpen &&
                            <>                            
                                <span className="text-2xl font-bold text-gray-700">VYASA</span>       
                            </>
                        }
                    </Link>
                </div>
                <div className="flex flex-col overflow-y-scroll  h-full scrollbar-hide">
                    <div className="mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-gray-400 text-xs uppercase mb-4">
                                {isOpen ? 
                                    "Menu" : 
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 w-5 h-5 mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z" fill="currentColor"></path></svg>
                                }
                            </h2>
                            <ul className="flex flex-col gap-1">
                                {menuArray?.map((menu) => (
                                    <li key={menu?.slug}>
                                        {menu?.children ?
                                            <>
                                                <button 
                                                    className={`menu-item w-full px-3 py-2 group cursor-pointer flex ${sideOpen ? "justify-between" : "justify-center"} items-center text-gray-700 text-sm font-medium rounded-lg ${activeMenu===menu?.slug || (menu?.children.filter((child) => child.slug===pathname).length>0)  ? "active bg-teal/40 dark:bg-white" : "hover:bg-gray-100 dark:hover:bg-gray-800"} ${menu?.children.filter((child) => child.slug==pathname).length} dark:text-gray-300`}
                                                    title={menu?.name}
                                                    onClick={() => handleMenu(menu?.slug)}
                                                    data-state={activeMenu===menu?.slug}
                                                >
                                                    <span className="flex gap-3 items-center group-[.active]:text-white">
                                                        {menu?.icon}
                                                        {isOpen && menu?.name}
                                                    </span>
                                                    {isOpen && 
                                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto w-5 h-5 transition-transform duration-200 group-[.active]:text-white group-data-[state=true]:-rotate-[180deg]"><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>                                        
                                                    }
                                                </button> 
                                                <div className={`overflow-hidden transition-all duration-300 ${activeMenu===menu?.slug ? "max-h-screen" : "max-h-0"}`}>
                                                    <ul className="mt-2 ml-8 flex flex-col gap-2">
                                                        {menu?.children?.map(child => (
                                                            <li key={child?.slug}>
                                                                <NavLink 
                                                                    to={`${child?.slug}`}
                                                                    title={child?.name}
                                                                    className={`menu-item w-full px-3 py-2 group flex ${isOpen ? "justify-between" : "justify-center"} items-center text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
                                                                >
                                                                    <span className="flex gap-3 items-center group-[.active]:text-white">
                                                                        {isOpen && child?.name}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </>
                                            :
                                            <NavLink 
                                                to={`${menu?.slug}`}
                                                title={menu?.name}
                                                className={`menu-item w-full px-3 py-2 group flex ${isOpen ? "justify-between" : "justify-center"} items-center text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
                                            >
                                                <span className="flex gap-3 items-center group-[.active]:text-white">
                                                    {menu?.icon}
                                                    {isOpen && menu?.name}
                                                </span>
                                            </NavLink>
                                        }
                                    </li>
                                ))}
                                <li>
                                    <button 
                                        title="Sign Out"
                                        className={`menu-item w-full px-3 py-2 group cursor-pointer flex ${isOpen ? "justify-between" : "justify-center"} items-center text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
                                        onClick={() => logout()}
                                    >
                                        <span className="flex gap-3 items-center">
                                            <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-700 group-[.active]:text-white dark:group-hover:text-gray-300" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.1007 19.247C14.6865 19.247 14.3507 18.9112 14.3507 18.497L14.3507 14.245H12.8507V18.497C12.8507 19.7396 13.8581 20.747 15.1007 20.747H18.5007C19.7434 20.747 20.7507 19.7396 20.7507 18.497L20.7507 5.49609C20.7507 4.25345 19.7433 3.24609 18.5007 3.24609H15.1007C13.8581 3.24609 12.8507 4.25345 12.8507 5.49609V9.74501L14.3507 9.74501V5.49609C14.3507 5.08188 14.6865 4.74609 15.1007 4.74609L18.5007 4.74609C18.9149 4.74609 19.2507 5.08188 19.2507 5.49609L19.2507 18.497C19.2507 18.9112 18.9149 19.247 18.5007 19.247H15.1007ZM3.25073 11.9984C3.25073 12.2144 3.34204 12.4091 3.48817 12.546L8.09483 17.1556C8.38763 17.4485 8.86251 17.4487 9.15549 17.1559C9.44848 16.8631 9.44863 16.3882 9.15583 16.0952L5.81116 12.7484L16.0007 12.7484C16.4149 12.7484 16.7507 12.4127 16.7507 11.9984C16.7507 11.5842 16.4149 11.2484 16.0007 11.2484L5.81528 11.2484L9.15585 7.90554C9.44864 7.61255 9.44847 7.13767 9.15547 6.84488C8.86248 6.55209 8.3876 6.55226 8.09481 6.84525L3.52309 11.4202C3.35673 11.5577 3.25073 11.7657 3.25073 11.9984Z" fill="currentColor"></path></svg>
                                            {isOpen && "Sign out"}
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            {isOpen &&
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-10 backdrop-blur-[2px] xl:hidden" onClick={() => { setIsHoverOpen(false); setSideOpen(!sideOpen) }}></div>
            }
        </>
    )
}

export default Sidebar;