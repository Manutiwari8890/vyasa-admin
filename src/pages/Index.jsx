import { useState, useRef, useEffect } from "react";
import ApexChart from "../Component/ApexChart";
import WavesChart from "../Component/WavesChart";
import PieChart from "../Component/PieChart";


function Index(){
    const [activityType, setActivityType] = useState("all");
    const [filterOpen, setFilterOpen] = useState(false);
    const filterArea = useRef(null);
    const [activeSelect, setActiveSelect] = useState([]);
    const [activeData, setActiveData] = useState([]);
    useEffect(() => {
        const clickOutside = (e) => {
            if(filterArea.current && !filterArea.current.contains(e.target)){
                setFilterOpen(false)
            }
        }
        if(filterOpen){
            document.addEventListener("click", clickOutside)
        }

        return () => {
            document.removeEventListener("click", clickOutside)
        }

    }, [filterOpen])

    useEffect(() => {
        const data = [
            {id : 330212, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Delivered"},
            {id : 330213, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Pending"},
            {id : 330214, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Delivered"},
            {id : 330215, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Processing"},
            {id : 330216, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Pending"},
            {id : 330217, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Delivered"},
            {id : 330218, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "In-Transit"},
            {id : 330219, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Delivered"},
            {id : 330220, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "Pending"},
            {id : 330221, category : "Toys", company : "FunTime", arrival : "07 Jun 2028 1:15 pm", route : "Sydney–Melbourne", price : 212.65, status : "In-Transit"},
        ]
        setActiveData(data);
    }, [])

    const handleSelectAll = (e) => {
        if(e.target.checked){
            setActiveSelect(activeData?.map(row => row.id))
        }else{
            setActiveSelect([])
        }
    }


    return (
        <>
            <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="bg-white border border-gray-300 p-6 rounded-2xl flex items-center gap-4 shadow-xs dark:bg-white/3 dark:border-gray-700">
                    <div className="bg-gray-100 text-center content-center w-16 h-16 rounded-xl dark:bg-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="h-8 w-8 mx-auto"><path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z" fill="currentColor"></path></svg>
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="text-gray-700 text-2xl font-semibold mb-2 dark:text-gray-100">12,384</h4>
                        <p className="text-sm text-gray-500 flex items-center dark:text-gray-300">Active Users <span className="ml-3 bg-green-100 text-xs text-green-600 rounded-full px-4 py-1">+20%</span></p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 p-6 rounded-2xl flex items-center gap-4 shadow-xs dark:bg-white/3 dark:border-gray-700">
                    <div className="bg-gray-100 text-center content-center w-16 h-16 rounded-xl dark:bg-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="h-8 w-8 mx-auto"><path d="M7.04102 4.66667H15.791C16.7575 4.66667 17.541 5.45017 17.541 6.41667V20.4167M17.541 20.4167V8.33004H20.4036C20.9846 8.33004 21.5277 8.61836 21.8532 9.09958L24.8239 13.4917C24.9171 13.6295 24.9897 13.7792 25.0402 13.9359M17.541 20.4167H17.5495M17.541 20.4167H11.5592M3.54102 20.4167H6.17451M25.1243 20.4167V14.4721C25.1243 14.2891 25.0956 14.1082 25.0402 13.9359M25.9993 20.4167H22.9342M12.8743 20.4167H17.5495M17.541 13.9359H25.0402M5.29102 9.04167H10.541M10.541 13.4167H3.54102M17.5495 20.4167C17.6595 19.026 18.8229 17.9317 20.2418 17.9317C21.6608 17.9317 22.8242 19.026 22.9342 20.4167M17.5495 20.4167C17.5439 20.4879 17.541 20.5599 17.541 20.6325C17.541 22.1241 18.7502 23.3333 20.2418 23.3333C21.7335 23.3333 22.9427 22.1241 22.9427 20.6325C22.9427 20.5599 22.9398 20.4879 22.9342 20.4167M11.5592 20.4167C11.5648 20.4879 11.5677 20.5599 11.5677 20.6325C11.5677 22.1241 10.3585 23.3333 8.86685 23.3333C7.37522 23.3333 6.16602 22.1241 6.16602 20.6325C6.16602 20.5599 6.16888 20.4879 6.17451 20.4167M11.5592 20.4167C11.4492 19.026 10.2858 17.9317 8.86685 17.9317C7.44787 17.9317 6.28447 19.026 6.17451 20.4167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="text-gray-700 text-2xl font-semibold mb-2 dark:text-gray-100">728</h4>
                        <p className="text-sm text-gray-500 flex items-center dark:text-gray-300">Orders in Transit <span className="ml-3 bg-orange-100 text-xs text-orange-600 rounded-full px-4 py-1">+0%</span></p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 p-6 rounded-2xl flex items-center gap-4 shadow-xs dark:bg-white/3 dark:border-gray-700">
                    <div className="bg-gray-100 text-center content-center w-16 h-16 rounded-xl dark:bg-gray-800 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className="h-8 w-8 mx-auto"><path d="M5.625 9.33333L3 9.33333M4.75 14H3M3.875 18.6667H3M9.90222 22.3117H23.0071C23.9027 22.3117 24.6537 21.6356 24.7475 20.7449L26.129 7.62071C26.2378 6.58744 25.4276 5.6875 24.3887 5.6875H11.2838C10.3882 5.6875 9.63716 6.36364 9.5434 7.25429L8.16184 20.3785C8.05307 21.4118 8.86324 22.3117 9.90222 22.3117ZM16.4622 5.6875H19.5793L18.7043 11.508H15.5872L16.4622 5.6875Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="text-left flex-1">
                        <h4 className="text-gray-700 text-2xl font-semibold mb-2 dark:text-gray-100">12,384</h4>
                        <p className="text-sm text-gray-500 flex items-center dark:text-gray-300">Total Orders <span className="ml-3 bg-red-100 text-xs text-red-600 rounded-full px-4 py-1">-20%</span></p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                    <ApexChart />
                    <WavesChart />
                    <PieChart />
            </div>
            <div className="overflow-hidden min-h-[500px] bg-white border border-gray-300 shadow-xs rounded-2xl">
                <div className="flex items-center justify-between p-5 border-b border-gray-300">
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-700">Delivery Activities</h3>
                        <p className="text-base text-gray-500">Track your recent shipping activities</p>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <div className="flex items-center gap-1 bg-gray-100 border border-gray-100 p-[2px] rounded-lg">
                            <button className={`text-gray-500 text-sm font-medium px-3 py-2 rounded-md cursor-pointer ${activityType==="all" ? "bg-white text-gray-700" : "hover:text-gray-800"}`} onClick={() => setActivityType("all")}>All</button>
                            <button className={`text-gray-500 text-sm font-medium px-3 py-2 rounded-md cursor-pointer ${activityType==="delivered" ? "bg-white text-gray-700" : "hover:text-gray-800"}`} onClick={() => setActivityType("delivered")}>Delivered</button>
                            <button className={`text-gray-500 text-sm font-medium px-3 py-2 rounded-md cursor-pointer ${activityType==="transit" ? "bg-white text-gray-700" : "hover:text-gray-800"}`} onClick={() => setActivityType("transit")}>In-Transit</button>
                            <button className={`text-gray-500 text-sm font-medium px-3 py-2 rounded-md cursor-pointer ${activityType==="pending" ? "bg-white text-gray-700" : "hover:text-gray-800"}`} onClick={() => setActivityType("pending")}>Pending</button>
                            <button className={`text-gray-500 text-sm font-medium px-3 py-2 rounded-md cursor-pointer ${activityType==="processing" ? "bg-white text-gray-700" : "hover:text-gray-800"}`} onClick={() => setActivityType("processing")}>Processing</button>
                        </div>
                        <div className="relative" ref={filterArea}>
                            <button 
                                className="flex items-center gap-1 text-base text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                                onClick={() => setFilterOpen(prev => !prev)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 14.0958L17.7087 14.0958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                Filter
                            </button>
                            {filterOpen &&
                                <div className="w-max h-max p-4 bg-white border border-gray-300 shadow-xs absolute top-[50px] rounded-lg right-0 z-10">
                                    <form>
                                        <div className="form-group mb-3">
                                            <label htmlFor="category" className="text-gray-700 font-medium text-xs dark:text-gray-400">Category</label>
                                            <div className="relative mt-1">
                                                <input type="text" className="peer text-sm w-full py-2 px-4 border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Search Category..." id="category" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="company" className="text-gray-700 font-medium text-xs dark:text-gray-400">Company</label>
                                            <div className="relative mt-1">
                                                <input type="text" className="peer text-sm w-full py-2 px-4 border-1 border-gray-300 rounded-md focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Search Company..." id="company" />
                                            </div>
                                        </div>
                                        <button className="text-center px-4 py-3 bg-teal w-full text-white rounded-xl mt-4 cursor-pointer hover:bg-red-700 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800">Apply</button>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto scrollbar">
                    <table className="min-w-full w-full table-auto md:w-max">
                        <thead>
                            <tr className="border-b border-gray-300 font-medium">
                                <th className="py-4 px-6">
                                    <label htmlFor="all" className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="all" className="w-4 h-4 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-sm dark:border-gray-600 checked:bg-teal disabled:opacity-60 " onChange={handleSelectAll} checked={activeSelect?.length===activeData?.length} />
                                            {activeSelect.length===activeData.length &&
                                                <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            }
                                        </div>
                                        <p className="text-sm text-gray-500 font-medium dark:text-gray-300">Order ID</p>
                                    </label>
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm">Category</p>
                                        <div className="flex flex-col gap-0.5 h-full">
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor"></path></svg>
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm">Company</p>
                                        <div className="flex flex-col gap-0.5 h-full">
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor"></path></svg>
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-sm">Arrival</p>
                                        <div className="flex flex-col gap-0.5 h-full">
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z" fill="currentColor"></path></svg>
                                            <svg className="text-gray-300" width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    Route
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    Price
                                </th>
                                <th className="p-4 text-sm text-left text-gray-500 font-medium cursor-pointer">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-x divide-gray-100">
                            {activeData?.length>0 && 
                                activeData?.map((data) => (
                                    <tr className="hover:bg-gray-50" key={data?.id}>
                                        <td className="px-6 py-4">
                                            <label htmlFor={`#${data?.id}`} className="flex items-center gap-2 cursor-pointer">
                                                <div className="relative h-[20px]">
                                                    <input type="checkbox" id={`#${data?.id}`} className="w-4 h-4 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-sm dark:border-gray-600 checked:bg-teal disabled:opacity-60 " value={data?.id} onChange={() => setActiveSelect((prev) => prev.includes(data?.id) ? prev.filter((item) => item!==data?.id) : [...prev, data?.id])} checked={activeSelect.includes(data?.id)} />
                                                    {activeSelect.includes(data?.id) &&
                                                        <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    }
                                                </div>
                                                <p className="text-xs text-gray-700 font-medium dark:text-gray-300">#330212</p>
                                            </label>
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            {data?.category}
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            {data?.company}
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            {data?.arrival}
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            {data?.route}
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            ${data?.price}
                                        </td>
                                        <td className="p-4 text-xs font-medium text-gray-700">
                                            <span 
                                                className={`px-4 py-1 rounded-full ${data?.status=="Delivered" ? "bg-green-100 text-green-600" : data?.status=="Pending" ? "bg-orange-100 text-orange-600" : data?.status=="In-Transit" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
                                            >
                                                {data?.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between p-5 items-center border-t border-gray-300">
                    <div className="text-left">
                        <h4 className="text-sm font-medium text-gray-500">Showing 1 to 5 of 10</h4>
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                        <button className="w-10 h-10 border border-gray-300 rounded-lg text-center content-center text-gray-400 cursor-not-allowed">
                            <svg className="w-6 h-6 mx-auto fill-current" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.58203 9.99868C2.58174 10.1909 2.6549 10.3833 2.80152 10.53L7.79818 15.5301C8.09097 15.8231 8.56584 15.8233 8.85883 15.5305C9.15183 15.2377 9.152 14.7629 8.85921 14.4699L5.13911 10.7472L16.6665 10.7472C17.0807 10.7472 17.4165 10.4114 17.4165 9.99715C17.4165 9.58294 17.0807 9.24715 16.6665 9.24715L5.14456 9.24715L8.85919 5.53016C9.15199 5.23717 9.15184 4.7623 8.85885 4.4695C8.56587 4.1767 8.09099 4.17685 7.79819 4.46984L2.84069 9.43049C2.68224 9.568 2.58203 9.77087 2.58203 9.99715C2.58203 9.99766 2.58203 9.99817 2.58203 9.99868Z"></path></svg>
                        </button>
                        <button className="w-10 h-10 rounded-lg text-center content-center cursor-pointer bg-teal text-white">
                            1
                        </button>
                        <button className="w-10 h-10 rounded-lg text-center content-center cursor-pointer text-gray-700 hover:bg-teal hover:text-white">
                            2
                        </button>
                        <button className="w-10 h-10 rounded-lg text-center content-center cursor-pointer text-gray-700 hover:bg-teal hover:text-white">
                            3
                        </button>
                        <button className="w-10 h-10 border border-gray-300 rounded-lg text-center content-center text-gray-600 cursor-pointer hover:bg-gray-100">
                            <svg className="w-6 h-6 mx-auto fill-current" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.4165 9.9986C17.4168 10.1909 17.3437 10.3832 17.197 10.53L12.2004 15.5301C11.9076 15.8231 11.4327 15.8233 11.1397 15.5305C10.8467 15.2377 10.8465 14.7629 11.1393 14.4699L14.8594 10.7472L3.33203 10.7472C2.91782 10.7472 2.58203 10.4114 2.58203 9.99715C2.58203 9.58294 2.91782 9.24715 3.33203 9.24715L14.854 9.24715L11.1393 5.53016C10.8465 5.23717 10.8467 4.7623 11.1397 4.4695C11.4327 4.1767 11.9075 4.17685 12.2003 4.46984L17.1578 9.43049C17.3163 9.568 17.4165 9.77087 17.4165 9.99715C17.4165 9.99763 17.4165 9.99812 17.4165 9.9986Z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;