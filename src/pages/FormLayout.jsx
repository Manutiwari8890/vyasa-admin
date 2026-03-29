import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

function FormLayout(){
    const [date, setDate] = useState(null);
    const wrapperRef = useRef(null);
    const [membership, setMembership] = useState("free");
    
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">Form Layouts</h2>
                <nav className="breadcrumb">
                    <ol className="flex items-center gap-1">
                        <li>
                            <Link to="/" className="flex gap-1 text-gray-500 items-center text-sm hover:text-gray-600">
                                Home
                                <svg className="w-4 h-4 stroke-current" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </Link>
                        </li>
                        <li className="text-sm text-gray-700">
                            Form Layouts
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                         <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Basic Form</h4>
                        </div>
                        <div className="p-5">
                            <form>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="form-group">
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Name" id="name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="relative mt-1">
                                            <input type="email" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Email Address" id="email" />
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <div className="relative mt-1">
                                            <input type="password" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Password" id="password" />
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <div className="relative mt-1">
                                            <input type="password" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Confirm Password" id="cpassword" />
                                        </div>
                                    </div>
                                </div>
                                <button className="text-center px-4 py-3 bg-red-600 w-full text-white rounded-xl mt-4 cursor-pointer hover:bg-red-700 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                         <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Example Form</h4>
                        </div>
                        <div className="p-5">
                            <form>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="form-group">
                                        <label htmlFor="fname" className="text-gray-600 text-sm font-medium dark:text-gray-400">First Name</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter first name" id="fname" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lname" className="text-gray-600 text-sm font-medium dark:text-gray-400">Last Name</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter last name" id="lname" />
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="email" className="text-gray-600 text-sm font-medium dark:text-gray-400">Email</label>
                                        <div className="relative mt-1">
                                            <input type="email" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter email address" id="email" />
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="subject" className="text-gray-600 text-sm font-medium dark:text-gray-400">Subject</label>
                                        <div className="relative mt-1">
                                            <select id="subject" value="" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300">
                                                <option value="" disabled={true}>Select an option</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                                <option value="option3">Option 3</option>
                                            </select>
                                            <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="message" className="text-gray-600 text-sm font-medium dark:text-gray-400">Message</label>
                                        <textarea rows={5} className="w-full mt-1 outline-none text-gray-600 text-sm font-medium border-1 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-600 dark:text-gray-400" id="message" placeholder="Enter your message"></textarea>
                                    </div>
                                </div>
                                <button className="text-center px-4 py-3 bg-red-600 w-full text-white rounded-xl mt-4 cursor-pointer flex justify-center items-center gap-3 hover:bg-red-700 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800">
                                    Send Message
                                    <svg className="size-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M4.98481 2.44399C3.11333 1.57147 1.15325 3.46979 1.96543 5.36824L3.82086 9.70527C3.90146 9.89367 3.90146 10.1069 3.82086 10.2953L1.96543 14.6323C1.15326 16.5307 3.11332 18.4291 4.98481 17.5565L16.8184 12.0395C18.5508 11.2319 18.5508 8.76865 16.8184 7.961L4.98481 2.44399ZM3.34453 4.77824C3.0738 4.14543 3.72716 3.51266 4.35099 3.80349L16.1846 9.32051C16.762 9.58973 16.762 10.4108 16.1846 10.68L4.35098 16.197C3.72716 16.4879 3.0738 15.8551 3.34453 15.2223L5.19996 10.8853C5.21944 10.8397 5.23735 10.7937 5.2537 10.7473L9.11784 10.7473C9.53206 10.7473 9.86784 10.4115 9.86784 9.99726C9.86784 9.58304 9.53206 9.24726 9.11784 9.24726L5.25157 9.24726C5.2358 9.20287 5.2186 9.15885 5.19996 9.11528L3.34453 4.77824Z" fill="currentColor"></path></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Example Form With Icons</h4>
                        </div>
                        <div className="p-5">
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="username" className="text-gray-600 text-sm font-medium dark:text-gray-400">Username</label>
                                    <div className="relative mt-1">
                                        <input type="text" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Username" id="username" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="text-gray-500 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="text-gray-600 text-sm font-medium dark:text-gray-400">Email</label>
                                    <div className="relative mt-1">
                                        <input type="email" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="info@gmail.com" id="email" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="text-gray-500 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                            <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clip-rule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className="text-gray-600 text-sm font-medium dark:text-gray-400">Password</label>
                                    <div className="relative mt-1">
                                        <input type="password" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Password" id="password" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-500 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                            <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clip-rule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword" className="text-gray-600 text-sm font-medium dark:text-gray-400">Confirm Password</label>
                                    <div className="relative mt-1">
                                        <input type="password" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Confirm Password" id="cpassword" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-500 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                            <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clip-rule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                         <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Example Form</h4>
                        </div>
                        <div className="p-5">
                            <div className="pb-4 mb-4 border-b border-gray-300">
                                <h4 className="text-sm font-medium text-gray-700">Personal Info</h4>
                            </div>
                            <form>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="form-group">
                                        <label htmlFor="fname" className="text-gray-600 text-sm font-medium dark:text-gray-400">First Name</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter first name" id="fname" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lname" className="text-gray-600 text-sm font-medium dark:text-gray-400">Last Name</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter last name" id="lname" />
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="gender" className="text-gray-600 text-sm font-medium dark:text-gray-400">Gender</label>
                                        <div className="relative mt-1">
                                            <select id="gender" value="" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300">
                                                <option value="" disabled={true}>Select an option</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="dob" className="text-gray-600 text-sm font-medium dark:text-gray-400">Date Of Birth</label>
                                        <div className="relative mt-1" ref={wrapperRef}>
                                            <Flatpickr
                                                value={date}
                                                id="dob"
                                                placeholder="Date Of Birth"
                                                onChange={([selectedDate]) => setDate(selectedDate)}
                                                options={{
                                                    dateFormat: "Y-m-d",
                                                    monthSelectorType: "static",
                                                    onReady: (_, __, fp) => {
                                                        if (wrapperRef.current) {
                                                        wrapperRef.current.appendChild(fp.calendarContainer);
                                                        }
                                                    },
                                                }}
                                                className="text-sm border-1 border-gray-300 p-3 rounded-lg outline-none w-full focus:outline-none focus:border-red-600"
                                            />
                                            <span className="absolute bg-white text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                                <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z" fill="currentColor"></path></svg>
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="category" className="text-gray-600 text-sm font-medium dark:text-gray-400">Category</label>
                                        <div className="relative mt-1">
                                            <select id="category" value="" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300">
                                                <option value="" disabled={true}>Select an option</option>
                                                <option value="ooption1">Option 1</option>
                                                <option value="ooption2">Option 2</option>
                                                <option value="ooption3">Option 3</option>
                                            </select>
                                            <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                    </div>
                                    <div className="pb-4 my-4 border-b border-gray-300 col-span-2">
                                        <h4 className="text-sm font-medium text-gray-700">Personal Info</h4>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="street" className="text-gray-600 text-sm font-medium dark:text-gray-400">Street</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="street" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city" className="text-gray-600 text-sm font-medium dark:text-gray-400">City</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="city" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state" className="text-gray-600 text-sm font-medium dark:text-gray-400">State</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="state" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postcode" className="text-gray-600 text-sm font-medium dark:text-gray-400">Postcode</label>
                                        <div className="relative mt-1">
                                            <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="postcode" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country" className="text-gray-600 text-sm font-medium dark:text-gray-400">Country</label>
                                        <div className="relative mt-1">
                                            <select id="country" value="" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300">
                                                <option value="" disabled={true}>-- Select country --</option>
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="russia">Russia</option>
                                            </select>
                                            <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 col-span-2 my-2">
                                        <p className="text-gray-700 text-sm">Membership :</p>
                                        <label htmlFor="free" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                                            <span className="relative content-center -mb-2">
                                                <input type="radio" className="sr-only" value="free" id="free" checked={membership === "free"} onChange={(e) => setMembership(e.target.value)} />
                                                <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center -mt-2 ${membership === "free" ? "bg-red-600" : ""}`}>
                                                    <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                                                </span>
                                            </span>
                                            Free
                                        </label>
                                        <label htmlFor="premium" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                                            <span className="relative content-center -mb-2">
                                                <input type="radio" className="sr-only" value="premium" id="premium" checked={membership === "premium"} onChange={(e) => setMembership(e.target.value)} />
                                                <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center -mt-2 ${membership === "premium" ? "bg-red-600" : ""}`}>
                                                    <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                                                </span>
                                            </span>
                                            Premium
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5 gap-4">
                                    <button className="text-center px-4 py-3 bg-red-600 text-white rounded-xl cursor-pointer flex justify-center items-center gap-3 hover:bg-red-700 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800">
                                        Save Changes
                                    </button>
                                    <button className="px-4 py-3 text-base border border-gray-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormLayout;