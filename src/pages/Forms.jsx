import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

function Forms(){
    const [passShow, setPassShow]= useState(false);
    const [date, setDate] = useState(new Date());
    const wrapperRef = useRef(null);
    const [checkbox, setCheckbox] = useState(false);
    const [tswitch, setTswitch] = useState(false);
    const [dswitch, setDswitch] = useState(false);
    const [validate, setValidate] = useState({error: true, success : true, warning : true});
    const [radio, setRadio] = useState("selected")

    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles(droppedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };


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
                            Form Elements
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Default Inputs</h4>
                        </div>
                        <div className="p-5">
                            <div className="form-group mb-4">
                                <label htmlFor="input" className="text-gray-600 text-sm font-medium dark:text-gray-400">Input</label>
                                <div className="relative mt-1">
                                    <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="input" />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="inputp" className="text-gray-600 text-sm font-medium dark:text-gray-400">Input with Placeholder</label>
                                <div className="relative mt-1">
                                    <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="info@gmail.com" id="inputp" />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="select" className="text-gray-600 text-sm font-medium dark:text-gray-400">Select Input</label>
                                <div className="relative mt-1">
                                    <select id="select" value="" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300">
                                        <option value="" disabled={true}>Select an option</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="template">Template</option>
                                        <option value="development">Development</option>
                                    </select>
                                    <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="text-gray-600 text-sm font-medium dark:text-gray-400">Password</label>
                                <div className="relative mt-1">
                                    <input type={`${passShow ? "text" : "password"}`} className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your Password" id="password" />
                                    <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(prev => !prev)}>
                                        {
                                            passShow ?
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="date" className="text-gray-600 text-sm font-medium dark:text-gray-400">Input with Placeholder</label>
                                <div className="relative mt-1" ref={wrapperRef}>
                                    <Flatpickr
                                        value={date}
                                        id="date"
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
                            <div className="form-group mb-4">
                                <label htmlFor="time" className="text-gray-600 text-sm font-medium dark:text-gray-400">Input with Placeholder</label>
                                <div className="relative mt-1">
                                    <input type="time" className="peer text-sm w-full p-3 border-1 border-gray-300 appearance-none rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" id="time" />
                                    <span className="absolute bg-white text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                        <svg className="size-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M3.04175 9.99984C3.04175 6.15686 6.1571 3.0415 10.0001 3.0415C13.8431 3.0415 16.9584 6.15686 16.9584 9.99984C16.9584 13.8428 13.8431 16.9582 10.0001 16.9582C6.1571 16.9582 3.04175 13.8428 3.04175 9.99984ZM10.0001 1.5415C5.32867 1.5415 1.54175 5.32843 1.54175 9.99984C1.54175 14.6712 5.32867 18.4582 10.0001 18.4582C14.6715 18.4582 18.4584 14.6712 18.4584 9.99984C18.4584 5.32843 14.6715 1.5415 10.0001 1.5415ZM9.99998 10.7498C9.58577 10.7498 9.24998 10.4141 9.24998 9.99984V5.4165C9.24998 5.00229 9.58577 4.6665 9.99998 4.6665C10.4142 4.6665 10.75 5.00229 10.75 5.4165V9.24984H13.3334C13.7476 9.24984 14.0834 9.58562 14.0834 9.99984C14.0834 10.4141 13.7476 10.7498 13.3334 10.7498H10.0001H9.99998Z" fill="currentColor"></path></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="inputr" className="text-gray-600 text-sm font-medium dark:text-gray-400">Input with Payment</label>
                                <div className="relative mt-1">
                                    <input type="text" className="peer text-sm w-full p-3 pl-9 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Card Number" id="inputr" />
                                    <div className="absolute bg-white text-gray-500 -translate-y-1/2 pointer-events-none left-3 top-1/2 flex items-center">
                                        <div className="rounded-full bg-red-500/80 w-2.5 h-2.5"></div>
                                        <div className="rounded-full bg-orange-500/80 w-2.5 h-2.5 -ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Textarea input field</h4>
                        </div>
                        <div className="p-5">
                            <div className="form-group">
                                <label htmlFor="message" className="text-gray-600 text-sm font-medium dark:text-gray-400">Description</label>
                                <textarea rows={5} className="w-full mt-1 outline-none text-gray-600 text-sm font-medium border-1 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-red-600 dark:text-gray-400" id="message" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="text-gray-600 text-sm font-medium dark:text-gray-400">Description</label>
                                <textarea rows={5} className="w-full mt-1 outline-none text-gray-600 text-sm font-medium border-1 border-gray-300 p-3 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:border-red-600 dark:text-gray-400" placeholder="Enter your message" disabled={true}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Input States</h4>
                            <p className="text-xs text-gray-500 mt-1">Validation styles for error, success and disabled states on form controls.</p>
                        </div>
                        <div className="p-5">
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="text-gray-600 text-sm font-medium dark:text-gray-400">Email</label>
                                <div className="relative mt-1">
                                    <input type="email" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your email" id="email" />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="disabledt" className="text-gray-600 text-sm font-medium dark:text-gray-400">Disabled</label>
                                <div className="relative mt-1">
                                    <input type="text" className="peer text-sm w-full p-3 border-1 border-gray-300 rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" disabled={true} placeholder="disabled@gmail.com" id="disabledt" />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="semail" className="text-gray-600 text-sm font-medium dark:text-gray-400">Success Email</label>
                                <div className="relative mt-1">
                                    <input type="email" className={`peer text-sm w-full p-3 border-1 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:text-gray-300 ${validate.success ? "border-green-500" : "border-gray-300 dark:border-gray-600"}`} placeholder="Enter your email" id="semail" />
                                    <p className="text-xs text-green-600 mt-1">This is an success message.</p>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="eemail" className="text-gray-600 text-sm font-medium dark:text-gray-400">Error Email</label>
                                <div className="relative mt-1">
                                    <input type="email" className={`peer text-sm w-full p-3 border-1 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:text-gray-300 ${validate.error ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`} placeholder="Enter your email" id="eemail" />
                                    <p className="text-xs text-red-600 mt-1">This is an Error message.</p>
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="wemail" className="text-gray-600 text-sm font-medium dark:text-gray-400">Warning Email</label>
                                <div className="relative mt-1">
                                    <input type="email" className={`peer text-sm w-full p-3 border-1 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:text-gray-300 ${validate.warning ? "border-orange-500" : "border-gray-300 dark:border-gray-600"}`} placeholder="Enter your email" id="wemail" />
                                    <p className="text-xs text-orange-600 mt-1">This is an warning message.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Checkbox</h4>
                        </div>
                        <div className="p-5">
                            <div className="flex gap-4">
                                <div className="form-group">
                                    <label htmlFor="remember" className="flex items-center gap-2">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="remember" className="w-5 h-5 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-md dark:border-gray-600 checked:bg-red-600 disabled:opacity-60 " onChange={() => setCheckbox(prev => !prev)} />
                                            {checkbox &&
                                                <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            }
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Default</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember" className="flex items-center gap-2">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="remember" className="w-5 h-5 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-md dark:border-gray-600 checked:bg-red-600 disabled:opacity-60 " checked={checkbox} onChange={() => setCheckbox(prev => !prev)} />
                                            <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Checked</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember" className="flex items-center gap-2">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="remember" className="w-5 h-5 appearance-none cursor-not-allowed border border-gray-300 checked:border-transparent rounded-md dark:border-gray-600 checked:bg-red-600 disabled:opacity-60 " disabled={true} />
                                            <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        </div>
                                        <p className="text-sm text-gray-400 dark:text-gray-300">Disabled</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Radio Buttons</h4>
                        </div>
                        <div className="p-5">
                            <div className="flex gap-4">
                                <label htmlFor="default" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                                    <span className="relative content-center -mb-2">
                                    <input type="radio" className="sr-only" value="default" id="default" checked={radio==="default"} onChange={(e) => setRadio(e.target.value)} />
                                    <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center -mt-2 ${radio==="default" ? "bg-red-600" : ""}`}>
                                        <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                                    </span>
                                    </span>
                                    Default
                                </label>
                                <label htmlFor="selected" className="flex items-center gap-2 text-base text-gray-700 cursor-pointer">
                                    <span className="relative content-center -mb-2">
                                    <input type="radio" className="sr-only" value="selected" id="selected" checked={radio==="selected"} onChange={(e) => setRadio(e.target.value)} />
                                    <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center -mt-2 ${radio==="selected" ? "bg-red-600" : ""}`}>
                                        <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                                    </span>
                                    </span>
                                    Selected
                                </label>
                                <label htmlFor="disabled" className="flex items-center gap-2 text-base text-gray-400 cursor-not-allowed">
                                    <span className="relative content-center -mb-2">
                                    <input type="radio" className="sr-only" value="disabled" id="disabled" checked={radio==="disabled"} disabled={true} />
                                    <span className={`w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center -mt-2 ${radio==="disabled" ? "bg-red-600" : ""}`}>
                                        <span className="bg-white w-2 h-2 rounded-full inline-block"></span>
                                    </span>
                                    </span>
                                    Disabled
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Toggle switch input</h4>
                        </div>
                        <div className="p-5">
                            <div className="flex gap-4 mb-6">
                                <div className="form-group">
                                    <label htmlFor="tswitch" className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="tswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " onChange={() => setTswitch(prev => !prev)} />
                                            <div className={`w-9 h-5 rounded-full duration-100 ${tswitch ? "bg-red-600" : "bg-gray-300"}`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5 ${tswitch ? "translate-x-full" : ""}`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Default</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tswitch" className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="tswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " />
                                            <div className={`w-9 h-5 rounded-full duration-100 ${true ? "bg-red-600" : "bg-gray-300"}`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5 ${true ? "translate-x-full" : ""}`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Checked</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dswitch" className="flex items-center gap-2 cursor-not-allowed opacity-50">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="dswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " disabled={true} />
                                            <div className={`w-9 h-5 rounded-full duration-100 bg-gray-300`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Disabled</p>
                                    </label>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="form-group">
                                    <label htmlFor="dswitch" className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="dswitch" value="dswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " onChange={() => setDswitch(prev => !prev)} />
                                            <div className={`w-9 h-5 rounded-full duration-100 ${dswitch ? "bg-gray-800" : "bg-gray-300"}`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5 ${dswitch ? "translate-x-full" : ""}`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Default</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dswitch" className="flex items-center gap-2 cursor-pointer">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="dswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " />
                                            <div className={`w-9 h-5 rounded-full duration-100 ${true ? "bg-gray-800" : "bg-gray-300"}`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5 ${true ? "translate-x-full" : ""}`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Checked</p>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dswitch" className="flex items-center gap-2 cursor-not-allowed opacity-50">
                                        <div className="relative h-[20px]">
                                            <input type="checkbox" id="dswitch" className="w-9 h-5 appearance-none bg-gray-300 checked:border-transparent rounded-full dark:border-gray-600 hidden checked:bg-red-600 disabled:opacity-60 " disabled={true} />
                                            <div className={`w-9 h-5 rounded-full duration-100 bg-gray-300`}></div>
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2 transition duration-300 left-0.5`}></div>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">Disabled</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">File Input</h4>
                        </div>
                        <div className="p-5">
                            <div className="form-group">
                                <label htmlFor="file" className="text-gray-600 text-sm font-medium dark:text-gray-400">Upload file</label>
                                <div className="relative mt-1">
                                    <input type="file" className="text-gray-500 text-sm w-full border-1 border-gray-300 rounded-lg file:border-collapse file:mr-5 file:cursor-pointer file:rounded-l-lg file:border-r file:border-gray-300 file:bg-gray-50 file:p-3 hover:file:bg-gray-100 focus:outline-none focus:border-red-600 dark:border-gray-600 dark:text-gray-300" id="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-xs rounded-2xl mb-5">
                        <div className="p-5 border-b border-gray-200">
                            <h4 className="text-base font-semibold text-gray-700">Dropzone</h4>
                        </div>
                        <div className="p-5">
                            <div className="form-group">
                                <label htmlFor="dropFile" className={`group text-gray-600 text-sm font-medium block w-full min-h-40 border-2 border-dashed rounded-xl text-center content-center cursor-pointer duration-200 hover:bg-gray-100 hover:border-gray-600 ${isDragging ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-gray-600"}`}
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                >
                                    <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" multiple={true} className="text-gray-500 text-sm w-[1px] h-[1px] hidden border-1 border-gray-300 rounded-lg  hover:file:bg-gray-100 focus:outline-none focus:border-red-600 dark:border-gray-600 dark:text-gray-300" id="dropFile" onChange={handleFileChange} />
                                    <svg className="fill-current w-8 h-8 mx-auto duration-200 mb-3 group-hover:w-9 group-hover:h-9" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"></path></svg>
                                    <h4 className="text-base font-semibold text-gray-700 mb-2">{isDragging ? "Drop File Here" : "Drag & Drop Files Here"}</h4>
                                    <p className="text-xs text-gray-500 font-[400] max-w-3/5 mx-auto">Drag and drop your PNG, JPG, WebP, SVG images here or browse</p>
                                </label>
                                {files.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-3">
                                    {files.map((file, i) => (
                                        <img
                                        key={i}
                                        src={URL.createObjectURL(file)}
                                        alt=""
                                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                        />
                                    ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Forms;