import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Chat() {
    const [activeUser, setActiveUser] = useState(null);
    const chatRef = useRef();

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    },[])

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Chats</h2>
                <nav className="breadcrumb">
                    <ol className="flex items-center gap-1">
                        <li>
                            <Link to="/" className="flex gap-1 text-gray-500 items-center text-sm hover:text-gray-600">
                                Home
                                <svg className="w-4 h-4 stroke-current" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Link>
                        </li>
                        <li className="text-sm text-gray-700">
                            Chats
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white border border-gray-300 shadow-xs p-5 rounded-2xl overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-base font-semibold text-gray-700">Chats</h4>
                        <div className="relative">
                            <button className="content-center p-2 group">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-gray-700 dark:hover:text-gray-300 size-6 cursor-pointer -mb-2"><path fillRule="evenodd" clipRule="evenodd" d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <form>
                            <div className="relative">
                                <button className="p-2 absolute top-1/2 -translate-y-1/2 left-1 cursor-pointer text-gray-500 hover:text-gray-600">
                                    <svg className="fill-current dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill=""></path></svg>
                                </button>
                                <input type="text" className="text-sm font-medium border border-gray-300 w-full p-3 pl-10 rounded-lg text-gray-700 outline-none placeholder:text-gray-500 " placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                    <div className="overflow-y-scroll h-[calc(100vh-325px)] chat-scrollbar">
                        <div className="mt-4 flex flex-col h-[100%]">
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/user.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                        <div className="w-3 h-3 rounded-full border-[1.5px] border-white bg-green-500 absolute bottom-[0px] right-[0px]"></div>
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Kaiya George</h6>
                                        <p className="text-[11px] text-gray-500 ">Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">15 mins</p>
                            </div>
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                        <div className="w-3 h-3 rounded-full border-[1.5px] border-white bg-green-500 absolute bottom-[0px] right-[0px]"></div>
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Lindsey Curtis</h6>
                                        <p className="text-[11px] text-gray-500 ">Designer</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">20 mins</p>
                            </div>
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/boy.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Kaiya George</h6>
                                        <p className="text-[11px] text-gray-500 ">Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">15 mins</p>
                            </div>
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/user.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Kaiya George</h6>
                                        <p className="text-[11px] text-gray-500 ">Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">15 mins</p>
                            </div>
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Kaiya George</h6>
                                        <p className="text-[11px] text-gray-500 ">Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">15 mins</p>
                            </div>
                            <div className="flex items-start justify-between py-3 px-3 rounded-lg cursor-pointer mb-2 hover:bg-gray-100">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-full w-10 h-10 relative">
                                        <img src="/assets/images/boy.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-xs font-semibold text-gray-700 mb-1">Kaiya George</h6>
                                        <p className="text-[11px] text-gray-500 ">Project Manager</p>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500">15 mins</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 bg-white border h-[calc(100vh-180px)]  border-gray-300 shadow-xs rounded-2xl flex flex-col overflow-hidden relative ">
                    <div className="w-full flex items-center justify-between px-5 py-3 border-b border-gray-300 sticky top-0">
                        <div className="flex gap-4 items-center">
                            <div className="rounded-full w-12 h-12 relative">
                                <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                <div className="w-3 h-3 rounded-full border-[1.5px] border-white bg-green-500 absolute bottom-[0px] right-[0px]"></div>
                            </div>
                            <h6 className="text-base font-semibold text-gray-700 mb-1">Kaiya George</h6>
                        </div>
                        <div className="flex gap-1 items-center">
                            <button className="cursor-pointer group p-1">
                                <svg className="stroke-gray-600 w-6 h-6 group-hover:stroke-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.54488 11.7254L8.80112 10.056C8.94007 9.98476 9.071 9.89524 9.16639 9.77162C9.57731 9.23912 9.66722 8.51628 9.38366 7.89244L7.76239 4.32564C7.23243 3.15974 5.7011 2.88206 4.79552 3.78764L3.72733 4.85577C3.36125 5.22182 3.18191 5.73847 3.27376 6.24794C3.9012 9.72846 5.56003 13.0595 8.25026 15.7497C10.9405 18.44 14.2716 20.0988 17.7521 20.7262C18.2615 20.8181 18.7782 20.6388 19.1442 20.2727L20.2124 19.2045C21.118 18.2989 20.8403 16.7676 19.6744 16.2377L16.1076 14.6164C15.4838 14.3328 14.7609 14.4227 14.2284 14.8336C14.1048 14.929 14.0153 15.06 13.944 15.1989L12.2747 18.4552" stroke="" strokeWidth="1.5"></path></svg>
                            </button>
                            <button className="cursor-pointer group p-1">
                                <svg className="fill-gray-600 size-6 group-hover:fill-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.25 5.25C3.00736 5.25 2 6.25736 2 7.5V16.5C2 17.7426 3.00736 18.75 4.25 18.75H15.25C16.4926 18.75 17.5 17.7426 17.5 16.5V15.3957L20.1118 16.9465C20.9451 17.4412 22 16.8407 22 15.8716V8.12838C22 7.15933 20.9451 6.55882 20.1118 7.05356L17.5 8.60433V7.5C17.5 6.25736 16.4926 5.25 15.25 5.25H4.25ZM17.5 10.3488V13.6512L20.5 15.4325V8.56756L17.5 10.3488ZM3.5 7.5C3.5 7.08579 3.83579 6.75 4.25 6.75H15.25C15.6642 6.75 16 7.08579 16 7.5V16.5C16 16.9142 15.6642 17.25 15.25 17.25H4.25C3.83579 17.25 3.5 16.9142 3.5 16.5V7.5Z" fill=""></path></svg>
                            </button>
                            <button className="cursor-pointer group p-1">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-gray-700 dark:hover:text-gray-300 size-6 cursor-pointer "><path fillRule="evenodd" clipRule="evenodd" d="M10.2441 6C10.2441 5.0335 11.0276 4.25 11.9941 4.25H12.0041C12.9706 4.25 13.7541 5.0335 13.7541 6C13.7541 6.9665 12.9706 7.75 12.0041 7.75H11.9941C11.0276 7.75 10.2441 6.9665 10.2441 6ZM10.2441 18C10.2441 17.0335 11.0276 16.25 11.9941 16.25H12.0041C12.9706 16.25 13.7541 17.0335 13.7541 18C13.7541 18.9665 12.9706 19.75 12.0041 19.75H11.9941C11.0276 19.75 10.2441 18.9665 10.2441 18ZM11.9941 10.25C11.0276 10.25 10.2441 11.0335 10.2441 12C10.2441 12.9665 11.0276 13.75 11.9941 13.75H12.0041C12.9706 13.75 13.7541 12.9665 13.7541 12C13.7541 11.0335 12.9706 10.25 12.0041 10.25H11.9941Z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-y-scroll main-chat scrollbar flex-1 px-5 py-4 mb-4" ref={chatRef}>
                        <div className="h-full">
                            <div className="flex gap-3 items-start mb-5">
                                <div className="rounded-full w-10 h-10 relative">
                                    <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-[0px] text-gray-700">
                                        <p className="text-sm">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">15 mins ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start mb-5">
                                <div className="rounded-full w-10 h-10 relative">
                                    <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-[0px] text-gray-700">
                                        <p className="text-sm">I want to make an appointment tomorrow from 2:00 to 5:00pm?</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">15 mins ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start justify-end mb-5">
                                <div className="text-left">
                                    <div className="bg-red-600 p-2 rounded-lg rounded-br-[0px] text-white">
                                        <p className="text-sm">If don’t like something, I’ll stay away from it.</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">12 mins ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start mb-5">
                                <div className="rounded-full w-10 h-10 relative">
                                    <img src="/assets/images/girl.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className="text-left">
                                    <div className="bg-gray-100 p-2 rounded-lg rounded-tl-[0px] text-gray-700">
                                        <p className="text-sm">I want more detailed information.</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">15 mins ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start justify-end mb-5">
                                <div className="text-left">
                                    <div className="bg-red-600 p-2 rounded-lg rounded-br-[0px] text-white">
                                        <p className="text-sm">They got there early, and got really good seats.</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">just now</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <form>
                        <div className="w-full flex items-center justify-between px-5 py-3 border-t border-gray-300 sticky bottom-0">
                            <div className="flex items-center w-full">
                                <div className="relative flex items-center">
                                    <button className="text-gray-500 cursor-pointer hover:text-gray-700">
                                        <svg className="fill-current size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM10.0001 9.23256C10.0001 8.5422 9.44042 7.98256 8.75007 7.98256C8.05971 7.98256 7.50007 8.5422 7.50007 9.23256V9.23266C7.50007 9.92301 8.05971 10.4827 8.75007 10.4827C9.44042 10.4827 10.0001 9.92301 10.0001 9.23266V9.23256ZM15.2499 7.98256C15.9403 7.98256 16.4999 8.5422 16.4999 9.23256V9.23266C16.4999 9.92301 15.9403 10.4827 15.2499 10.4827C14.5596 10.4827 13.9999 9.92301 13.9999 9.23266V9.23256C13.9999 8.5422 14.5596 7.98256 15.2499 7.98256ZM9.23014 13.7116C8.97215 13.3876 8.5003 13.334 8.17625 13.592C7.8522 13.85 7.79865 14.3219 8.05665 14.6459C8.97846 15.8037 10.4026 16.5481 12 16.5481C13.5975 16.5481 15.0216 15.8037 15.9434 14.6459C16.2014 14.3219 16.1479 13.85 15.8238 13.592C15.4998 13.334 15.0279 13.3876 14.7699 13.7116C14.1205 14.5274 13.1213 15.0481 12 15.0481C10.8788 15.0481 9.87961 14.5274 9.23014 13.7116Z" fill=""></path></svg>
                                    </button>
                                </div>
                                <input type="text" className="w-full text-sm text-gray-900 outline-none p-2 placeholder:text-gray-600" placeholder="Type a message..." />
                            </div>
                            <div className="flex gap-2 items-center">
                                <button className="cursor-pointer group p-1">
                                    <svg className="fill-gray-600 w-6 h-6 group-hover:fill-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9522 14.4422C12.9522 14.452 12.9524 14.4618 12.9527 14.4714V16.1442C12.9527 16.6699 12.5265 17.0961 12.0008 17.0961C11.475 17.0961 11.0488 16.6699 11.0488 16.1442V6.15388C11.0488 5.73966 10.7131 5.40388 10.2988 5.40388C9.88463 5.40388 9.54885 5.73966 9.54885 6.15388V16.1442C9.54885 17.4984 10.6466 18.5961 12.0008 18.5961C13.355 18.5961 14.4527 17.4983 14.4527 16.1442V6.15388C14.4527 6.14308 14.4525 6.13235 14.452 6.12166C14.4347 3.84237 12.5817 2 10.2983 2C8.00416 2 6.14441 3.85976 6.14441 6.15388V14.4422C6.14441 14.4492 6.1445 14.4561 6.14469 14.463V16.1442C6.14469 19.3783 8.76643 22 12.0005 22C15.2346 22 17.8563 19.3783 17.8563 16.1442V9.55775C17.8563 9.14354 17.5205 8.80775 17.1063 8.80775C16.6921 8.80775 16.3563 9.14354 16.3563 9.55775V16.1442C16.3563 18.5498 14.4062 20.5 12.0005 20.5C9.59485 20.5 7.64469 18.5498 7.64469 16.1442V9.55775C7.64469 9.55083 7.6446 9.54393 7.64441 9.53706L7.64441 6.15388C7.64441 4.68818 8.83259 3.5 10.2983 3.5C11.764 3.5 12.9522 4.68818 12.9522 6.15388L12.9522 14.4422Z" fill=""></path></svg>
                                </button>
                                <button className="cursor-pointer group p-1">
                                    <svg className="stroke-gray-600 size-6 group-hover:stroke-red-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="2.75" width="10" height="12.5" rx="5" stroke="" strokeWidth="1.5"></rect><path d="M20 10.25C20 14.6683 16.4183 18.25 12 18.25C7.58172 18.25 4 14.6683 4 10.25" stroke="" strokeWidth="1.5" strokeLinecap="round"></path><path d="M10 21.25H14" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 18.25L12 21.25" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 7.5L12 10.5" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.5 8.25L14.5 9.75" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.5 8.25L9.5 9.75" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button className="cursor-pointer group p-2 bg-red-600 rounded-lg hover:bg-red-700">
                                    <svg className="text-white w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.98481 2.44399C3.11333 1.57147 1.15325 3.46979 1.96543 5.36824L3.82086 9.70527C3.90146 9.89367 3.90146 10.1069 3.82086 10.2953L1.96543 14.6323C1.15326 16.5307 3.11332 18.4291 4.98481 17.5565L16.8184 12.0395C18.5508 11.2319 18.5508 8.76865 16.8184 7.961L4.98481 2.44399ZM3.34453 4.77824C3.0738 4.14543 3.72716 3.51266 4.35099 3.80349L16.1846 9.32051C16.762 9.58973 16.762 10.4108 16.1846 10.68L4.35098 16.197C3.72716 16.4879 3.0738 15.8551 3.34453 15.2223L5.19996 10.8853C5.21944 10.8397 5.23735 10.7937 5.2537 10.7473L9.11784 10.7473C9.53206 10.7473 9.86784 10.4115 9.86784 9.99726C9.86784 9.58304 9.53206 9.24726 9.11784 9.24726L5.25157 9.24726C5.2358 9.20287 5.2186 9.15885 5.19996 9.11528L3.34453 4.77824Z" fill="white"></path></svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Chat;