import { useState } from "react";
import { Link } from "react-router-dom";

function Profile(){
    const [editProfile, setEditProfile] = useState(false);
    const [editAddress, setEditAddress] = useState(false);
    const [passShow, setPassShow] = useState([false, false, false]);

    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Profile</h2>
                <nav className="breadcrumb">
                    <ol className="flex items-center gap-1">
                        <li>
                            <Link to="/" className="flex gap-1 text-gray-500 items-center text-sm hover:text-gray-600">
                                Home
                                <svg className="w-4 h-4 stroke-current" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Link>
                        </li>
                        <li className="text-sm text-gray-700">
                            Profile
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs">
                <h4 className="text-base font-semibold text-gray-700 mb-5">Profile</h4>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between mb-6">
                    <div className="flex gap-5 items-center">
                        <div className="w-30 h-30 rounded-full overflow-hidden">
                            <img src="/assets/images/user.jpg" alt="" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">Manu Tiwari</h4>
                            <p className="text-base text-gray-500 flex gap-2"><span>Team Manager</span> <span>|</span> <span>Jaipur, INDIA</span></p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Link className="inline-block w-12 h-12 content-center border border-gray-200 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 mx-auto"><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" fill="currentColor" /></svg>
                        </Link>
                        <Link className="inline-block w-12 h-12 content-center border border-gray-200 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" class="w-5 h-5 m-auto"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" fill="currentColor"></path></svg>
                        </Link>
                    </div>
                    
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between mb-6">
                    <div className="flex items-start justify-between w-full">
                        <div className="text-left w-1/2">
                            <h4 className="text-base font-semibold text-gray-700 mb-5">Personal Information</h4>
                            <div className="w-full grid grid-cols-2 gap-x-2 gap-y-6">
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">First Name</h6>
                                    <p className="text-base text-gray-900">Musharof</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Last Name</h6>
                                    <p className="text-base text-gray-900">Chowdhury</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Email address</h6>
                                    <p className="text-base text-gray-900">randomuser@pimjo.com</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Phone</h6>
                                    <p className="text-base text-gray-900">+09 363 398 46</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Bio</h6>
                                    <p className="text-base text-gray-900">Team Manager</p>                                    
                                </div>
                            </div>                        
                        </div>
                        <button className="text-base font-semibold text-gray-600 bg-gray-100 flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-700" onClick={() => setEditProfile(true)}>
                            <svg class="fill-current" className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z" fill="currentColor"></path></svg>
                            Edit
                        </button>
                    </div>
                    {editProfile &&
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]" onClick={() => setEditProfile(false)}>
                            <div className="bg-white border border-gray-200 shadow-xs p-8 px-10 w-1/2 rounded-3xl" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Edit Personal Information </h3>
                                        <p className="text-sm font-medium text-gray-500">Update your details to keep your profile up-to-date.</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 content-center cursor-pointer hover:bg-gray-200"
                                        onClick={() => {setEditProfile(false);}}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                                <form>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group mb-2">
                                            <label htmlFor="fname" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">First Name</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your first name" id="fname" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="lname" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Last Name</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your last name" id="lname" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="email" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Email Address</label>
                                            <input type="email" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your email" id="email" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="phone" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Phone Number</label>
                                            <input type="tel" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your phone number" id="phone" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="bio" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Bio</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Bio" id="bio" />
                                        </div>
                                        <div className="flex items-center justify-end gap-4 col-span-2">
                                            <button className="bg-gray-100 rounded-lg text-base text-gray-700 px-6 py-3 cursor-pointer hover:bg-gray-200" type="button" onClick={() => setEditProfile(false)}>Close</button>
                                            <button className="bg-teal rounded-lg text-base text-white px-4 py-3 cursor-pointer hover:bg-teal-dark">Save Changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl flex items-center justify-between mb-6">
                    <div className="flex items-start justify-between w-full">
                        <div className="text-left w-1/2">
                            <h4 className="text-base font-semibold text-gray-700 mb-5">Address</h4>
                            <div className="w-full grid grid-cols-2 gap-x-2 gap-y-6">
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Country</h6>
                                    <p className="text-base text-gray-900">INDIA</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">City/State</h6>
                                    <p className="text-base text-gray-900">Jaipur, Rajasthan</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">Pincode</h6>
                                    <p className="text-base text-gray-900">302013</p>                                    
                                </div>
                                <div>
                                    <h6 className="text-xs text-gray-500 mb-1">TAX ID</h6>
                                    <p className="text-base text-gray-900">AS4568384</p>                                    
                                </div>
                            </div>                        
                        </div>
                        <button className="text-base font-semibold text-gray-600 bg-gray-100 flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-700" onClick={() => setEditAddress(true)}>
                            <svg class="fill-current" className="w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z" fill="currentColor"></path></svg>
                            Edit
                        </button>
                    </div>
                    {editAddress &&
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]" onClick={() => setEditAddress(false)}>
                            <div className="bg-white border border-gray-200 shadow-xs p-8 px-10 w-1/2 rounded-3xl" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Edit Address </h3>
                                        <p className="text-sm font-medium text-gray-500">Update your details to keep your profile up-to-date.</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 content-center cursor-pointer hover:bg-gray-200"
                                        onClick={() => {setEditAddress(false);}}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                                <form>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group mb-2">
                                            <label htmlFor="country" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Country</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your country" id="country" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="state" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">City/State</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your City/State" id="state" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="pincode" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">Pincode</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your pincode" id="pincode" />
                                        </div>
                                        <div className="form-group mb-2">
                                            <label htmlFor="text" className="inline-block text-gray-700 text-sm font-semibold mb-2 dark:text-gray-400">TAX ID</label>
                                            <input type="text" className="peer text-sm w-full px-4 py-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your Tax Id" id="tax" />
                                        </div>
                                        <div className="flex items-center justify-end gap-4 col-span-2">
                                            <button className="bg-gray-100 rounded-lg text-base text-gray-700 px-6 py-3 cursor-pointer hover:bg-gray-200" type="button" onClick={() => setEditAddress(false)}>Close</button>
                                            <button className="bg-teal rounded-lg text-base text-white px-4 py-3 cursor-pointer hover:bg-teal-dark">Save Changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl ">
                    <h4 className="text-base font-semibold text-gray-700 mb-5">Update Password</h4>
                    <div className="w-1/2">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="cpassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Current Password</label>
                                <div className="relative mt-2">
                                    <input type={`${passShow[0] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your Current Password" id="cpassword" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                        <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index==0 ? !pass : pass ))}>
                                        {
                                            passShow[0] ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="npassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">New Password</label>
                                <div className="relative mt-2">
                                    <input type={`${passShow[1] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your New Password" id="npassword" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                        <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index==1 ? !pass : pass ))}>
                                        {
                                            passShow[1] ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="cnpassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Confirm New Password</label>
                                <div className="relative mt-2">
                                    <input type={`${passShow[2] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Confirm Your New Password" id="cnpassword" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                        <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index==2 ? !pass : pass ))}>
                                        {
                                            passShow[2] ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <button className="bg-teal rounded-lg text-base text-white px-4 py-3 cursor-pointer hover:bg-teal-dark">Update Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;