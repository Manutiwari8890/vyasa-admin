import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "../Component/Skeleton";

function Tables() {
    const [activeSelect, setActiveSelect] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [activeEdit, setActiveEdit] = useState(null);

    const colors = ["bg-red-100 text-red-600", "bg-green-100 text-green-600 ", "bg-blue-100 text-blue-600 ", "bg-violet-100 text-violet-600 ", "bg-orange-100 text-orange-600 ", "bg-pink-100 text-pink-600 "]

    useEffect(() => {
            const data = [
                {id : 330212, name : "John Doe", email : "johndoe@gmail.com", service : "Software License", date : "07 Jun 2028 1:15 pm", price : 1850.34, status : "Complete"},
                {id : 330213, name : "Jane Smith", email : "johndoe@gmail.com", service : "Software License", date : "07 Jun 2028 1:15 pm", price : 1850.34, status : "Pending"},
                {id : 330215, name : "Michael Brown", email : "johndoe@gmail.com", service : "Software License", date : "07 Jun 2028 1:15 pm", price : 1850.34, status : "Delivered"},
                {id : 330217, name : "Alice Johnson", email : "johndoe@gmail.com", service : "Software License", date : "07 Jun 2028 1:15 pm", price : 1850.34, status : "Pending"},
                {id : 330218, name : "Robert Lee", email : "johndoe@gmail.com", service : "Software License", date : "07 Jun 2028 1:15 pm", price : 1850.34, status : "Cancel"},
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
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Basic Tables</h2>
                <nav className="breadcrumb">
                    <ol className="flex items-center gap-1">
                        <li>
                            <Link to="/" className="flex gap-1 text-gray-500 items-center text-sm hover:text-gray-600">
                                Home
                                <svg className="w-4 h-4 stroke-current" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Link>
                        </li>
                        <li className="text-sm text-gray-700">
                            Basic Tables
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                <div className="p-5 border-b border-gray-200">
                    <h4 className="text-base font-semibold text-gray-700">Basic Table 1</h4>
                </div>
                <div className="p-5">
                    <div className="overflow-hidden border border-gray-300 rounded-xl">
                        <div className="overflow-x-auto scrollbar">
                            <table className="min-w-full w-full table-auto md:w-max">
                                <thead className="text-sm text-left text-gray-600">
                                    <tr className="border-b border-gray-300 font-medium">
                                        <th className="p-4 font-medium">User</th>
                                        <th className="p-4 font-medium">Project Name</th>
                                        <th className="p-4 font-medium">Team</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium">Budget</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-sm text-gray-500">
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/user.jpg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                    <span className="block text-xs">Web Designer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Agency Website
                                        </td>
                                        <td className="py-4">
                                            <div className="flex -space-x-2">
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600`}>Pending</span>
                                        </td>
                                        <td className="py-4">
                                            3.9K
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/user.jpg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                    <span className="block text-xs">Web Designer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Agency Website
                                        </td>
                                        <td className="py-4">
                                            <div className="flex -space-x-2">
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-green-100 text-green-600`}>Active</span>
                                        </td>
                                        <td className="py-4">
                                            3.9K
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/user.jpg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                    <span className="block text-xs">Web Designer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Agency Website
                                        </td>
                                        <td className="py-4">
                                            <div className="flex -space-x-2">
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600`}>Pending</span>
                                        </td>
                                        <td className="py-4">
                                            3.9K
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/user.jpg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                    <span className="block text-xs">Web Designer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Agency Website
                                        </td>
                                        <td className="py-4">
                                            <div className="flex -space-x-2">
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-red-100 text-red-600`}>Cancel</span>
                                        </td>
                                        <td className="py-4">
                                            3.9K
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/user.jpg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                    <span className="block text-xs">Web Designer</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Agency Website
                                        </td>
                                        <td className="py-4">
                                            <div className="flex -space-x-2">
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                                <img src="/assets/images/user.jpg" className="w-8 h-8 object-cover border-2 border-white rounded-full" />
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600`}>Pending</span>
                                        </td>
                                        <td className="py-4">
                                            3.9K
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                <div className="p-5 border-b border-gray-200">
                    <h4 className="text-base font-semibold text-gray-700">Basic Table 2</h4>
                </div>
                <div className="p-5">
                    <div className="overflow-hidden border border-gray-300 rounded-xl">
                        <div className="p-4 flex justify-between items-center border-b border-gray-300">
                            <h4 className="text-base font-semibold text-gray-700">Recent Orders</h4>
                            <div className="flex gap-2">
                                <button
                                    className="flex items-center gap-1 text-base text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M14.6537 5.90414C14.6537 4.48433 13.5027 3.33331 12.0829 3.33331C10.6631 3.33331 9.51206 4.48433 9.51204 5.90415M14.6537 5.90414C14.6537 7.32398 13.5027 8.47498 12.0829 8.47498C10.663 8.47498 9.51204 7.32398 9.51204 5.90415M14.6537 5.90414L17.7087 5.90411M9.51204 5.90415L2.29199 5.90411M5.34694 14.0958C5.34694 12.676 6.49794 11.525 7.91777 11.525C9.33761 11.525 10.4886 12.676 10.4886 14.0958M5.34694 14.0958C5.34694 15.5156 6.49794 16.6666 7.91778 16.6666C9.33761 16.6666 10.4886 15.5156 10.4886 14.0958M5.34694 14.0958L2.29199 14.0958M10.4886 14.0958L17.7087 14.0958" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    Filter
                                </button>
                                <button
                                    className="text-base text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    See all
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto scrollbar">
                            <table className="min-w-full w-full table-auto md:w-max">
                                <thead className="text-sm text-left text-gray-600">
                                    <tr className="bg-gray-50 font-medium">
                                        <th className="p-4 font-medium">
                                            <label htmlFor="all" className="flex items-center gap-2 cursor-pointer">
                                                <div className="relative h-[16px]">
                                                    <input type="checkbox" id="all" className="w-4 h-4 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-sm dark:border-gray-600 checked:bg-red-600 disabled:opacity-60 " onChange={handleSelectAll} checked={activeSelect?.length===activeData?.length} />
                                                    {activeSelect.length===activeData.length &&
                                                        <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    }
                                                </div>
                                                <p className="text-sm text-gray-500 font-medium dark:text-gray-300">Deal ID</p>
                                            </label>
                                        </th>
                                        <th className="p-4 font-medium">Customer</th>
                                        <th className="p-4 font-medium">Product/Service</th>
                                        <th className="p-4 font-medium">Deal Value</th>
                                        <th className="p-4 font-medium">Close Date</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-500">
                                    {activeData?.length>0 && 
                                        activeData?.map((data, index) => (
                                            <tr key={data?.id}>
                                                <td className="p-4">
                                                    <label htmlFor={`#${data?.id}`} className="flex items-center gap-2 cursor-pointer">
                                                        <div className="relative h-[16px]">
                                                            <input type="checkbox" id={`#${data?.id}`} className="w-4 h-4 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-sm dark:border-gray-600 checked:bg-red-600 disabled:opacity-60 " value={data?.id} onChange={() => setActiveSelect((prev) => prev.includes(data?.id) ? prev.filter((item) => item!==data?.id) : [...prev, data?.id])} checked={activeSelect.includes(data?.id)} />
                                                            {activeSelect.includes(data?.id) &&
                                                                <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                            }
                                                        </div>
                                                        <p className="text-xs text-gray-700 font-medium dark:text-gray-300">#{data?.id}</p>
                                                    </label>
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`${colors[index]} text-sm font-semibold text-center content-center w-10 h-10 rounded-full`}>
                                                            {Array.from(data?.name)[0]}{Array.from(data?.name.split(" ")[1])[0]}
                                                        </div>
                                                        <div className="text-left">
                                                            <p className="text-sm">{data?.name}</p>
                                                            <span className="text-gray-500">{data?.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    {data?.service}
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    ${data?.price}
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    {data?.date}
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    <span 
                                                        className={`px-4 py-1 rounded-full ${data?.status=="Complete" ? "bg-green-100 text-green-600" : data?.status=="Pending" ? "bg-orange-100 text-orange-600" : data?.status=="Cancel" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
                                                    >
                                                        {data?.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-xs font-medium text-gray-700">
                                                    <button className="p-1 cursor-pointer group">
                                                        <svg className="w-4.5 h-4.5 size-5 group-hover:text-red-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z" fill="currentColor"></path></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                <div className="p-5 border-b border-gray-200">
                    <h4 className="text-base font-semibold text-gray-700">Basic Table 3</h4>
                </div>
                <div className="p-5">
                    <div className="overflow-hidden border border-gray-300 rounded-2xl p-5">
                        <div className="p-4 pt-0 flex justify-between items-center border-b border-gray-100">
                            <h4 className="text-base font-semibold text-gray-700">Recent Orders</h4>
                            <form>
                                <div className="flex gap-2 border border-gray-200 px-4 py-3 rounded-lg">
                                    <button>
                                        <svg class="fill-gray-500 w-5 h-5 dark:fill-gray-400" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill=""></path></svg>
                                    </button>
                                    <input type="text" className="text-sm text-gray-700 placeholder:text-gray-500 outline-none" placeholder="Search..." />
                                </div>
                            </form>
                            
                        </div>
                        <div className="overflow-x-auto scrollbar">
                            <table className="min-w-full w-full table-auto md:w-max">
                                <thead className="text-sm text-left text-gray-600">
                                    <tr className="border-b border-gray-100 font-medium">
                                        <th className="p-4 font-medium">Name</th>
                                        <th className="p-4 font-medium">Date</th>
                                        <th className="p-4 font-medium">Price</th>
                                        <th className="p-4 font-medium">Category</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm text-gray-500">
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/brand-02.svg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Nov 23, 01:00 PM
                                        </td>
                                        <td className="p-4">
                                            $2,567.88
                                        </td>
                                        <td className="p-4">
                                            Finance
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600`}>Pending</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="relative">
                                                <button className="p-2 group cursor-pointer" onClick={() => setActiveEdit(activeEdit===1 ? null : 1)}>
                                                    <svg className="fill-current w-6 h-6 text-gray-500 group-hover:text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z" fill=""></path></svg>
                                                </button>
                                                {activeEdit===1 &&
                                                    <div className="absolute w-max px-2 py-2 top-8 right-0 left-auto bg-white border border-gray-300 rounded-xl flex flex-col gap-1 z-10">
                                                        <Link to="/" className="text-sm text-gray-700 py-1.5 px-3  text-left hover:bg-gray-100 rounded-lg">View More</Link>
                                                        <button className="text-sm text-gray-700 py-1.5 px-3 text-left cursor-pointer hover:bg-gray-100 rounded-lg">Delete</button>
                                                    </div>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <img src="/assets/images/brand-02.svg" className="w-full h-full object-cover rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block text-sm font-medium text-gray-700 mb-1">Lindsey Curtis</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            Nov 23, 01:00 PM
                                        </td>
                                        <td className="p-4">
                                            $2,567.88
                                        </td>
                                        <td className="p-4">
                                            Finance
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-600`}>Pending</span>
                                        </td>
                                        <td className="p-4">
                                            <div className="relative">
                                                <button className="p-2 group cursor-pointer" onClick={() => setActiveEdit(activeEdit===2 ? null : 2)}>
                                                    <svg className="fill-current w-6 h-6 text-gray-500 group-hover:text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z" fill=""></path></svg>
                                                </button>
                                                {activeEdit===2 &&
                                                    <div className="absolute w-max px-2 py-2 top-8 right-0 left-auto bg-white border border-gray-300 rounded-xl flex flex-col gap-1 z-10">
                                                        <Link to="/" className="text-sm text-gray-700 py-1.5 px-3  text-left hover:bg-gray-100 rounded-lg">View More</Link>
                                                        <button className="text-sm text-gray-700 py-1.5 px-3 text-left cursor-pointer hover:bg-gray-100 rounded-lg">Delete</button>
                                                    </div>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-full">
                                                    <Skeleton classValue="w-full h-full rounded-full" />
                                                </div>
                                                <div className="text-left">
                                                    <Skeleton classValue="w-20 h-3 rounded-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <Skeleton classValue="w-25 h-3 rounded-full" />
                                        </td>
                                        <td className="p-4">
                                            <Skeleton classValue="w-15 h-3 rounded-full" />
                                        </td>
                                        <td className="p-4">
                                            <Skeleton classValue="w-15 h-3 rounded-full" />
                                        </td>
                                        <td className="p-4">
                                            <Skeleton classValue="w-15 h-3 rounded-full" />
                                        </td>
                                        <td className="p-4">
                                            <Skeleton classValue="w-3 h-3 rounded-full" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tables;