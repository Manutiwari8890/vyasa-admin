import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [remember, setRemember] = useState(false);
    const [passShow, setPassShow] = useState(false);

    return (
        <>
            <div className="min-h-screen content-center">
                <main className="w-full h-full" dir="ltr">
                    <div className="grid grid-cols-2 relative">
                        <div className="bg-[url('/assets/images/login-bg.jpg')] min-h-screen bg-center bg-cover text-center content-center">
                            <img src="/assets/images/grid-01.svg" alt="" />
                        </div>
                        <div className="bg-white h-screen px-25 py-5 content-center overflow-y-scroll scrollbar dark:bg-gray-900">
                            <div className="w-full max-w-[600px] m-auto">
                                <h4 className="text-3xl font-bold text-gray-800 mb-3 dark:text-gray-300">Sign Up</h4>
                                <p className="text-sm text-gray-500 mb-7 font-medium dark:text-gray-300">Enter your email and password to sign up !</p>
                                {/* <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 px-3 py-3 text-base text-gray-600 font-medium bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z" fill="#4285F4"></path><path d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z" fill="#34A853"></path><path d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z" fill="#FBBC05"></path><path d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z" fill="#EB4335"></path></svg>
                                        Sign up with Google
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-3 py-3 text-base text-gray-600 font-medium bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                                        <svg width="21" className="fill-current" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z"></path></svg>
                                        Sign up with X
                                    </button>
                                </div>
                                <div className="w-full relative py-1 my-1">
                                    <hr className="border-gray-300 absolute top-1/2 left-0 w-full dark:border-gray-600" />
                                    <p className="text-sm font-medium w-max m-auto px-2 py-1 bg-white text-gray-500 relative z-1 dark:bg-gray-900 dark:text-gray-300">OR</p>
                                </div> */}
                                <form>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="form-group">
                                            <label htmlFor="fname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">First Name</label>
                                            <div className="relative mt-1">
                                                <input type="text" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your first name" id="fname" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Last Name</label>
                                            <div className="relative mt-1">
                                                <input type="text" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter your last name" id="lname" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="form-group col-span-2">
                                            <label htmlFor="email" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Email</label>
                                            <div className="relative mt-1">
                                                <input type="email" className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="info@gmail.com" id="email" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                                    <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="form-group col-span-2">
                                            <label htmlFor="password" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Password</label>
                                            <div className="relative mt-1">
                                                <input type={`${passShow ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your Password" id="password" />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-red-600 dark:text-gray-600">
                                                    <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(prev => !prev)}>
                                                    {
                                                        passShow ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <div className="form-group">
                                            <label htmlFor="remember" className="flex items-center gap-2">
                                                <div className="relative h-[20px]">
                                                    <input type="checkbox" id="remember" className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md dark:border-gray-600 checked:bg-red-600 disabled:opacity-60" onChange={() => setRemember(prev => !prev)} />
                                                    {remember &&
                                                        <svg class="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    }
                                                </div>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">By creating an account means you agree to the Terms and Conditions, and our Privacy Policy</p>
                                            </label>
                                        </div>
                                    </div>
                                    <button className="text-center px-4 py-3 bg-red-600 w-full text-white rounded-xl mt-4 cursor-pointer hover:bg-red-700 dark:text-white dark:bg-red-700 dark:hover:bg-red-800">Sign Up</button>
                                </form>
                                <p className="text-sm text gray-700 mt-4 dark:text-gray-300">Already have an account ? <Link className="text-red-600 hover:text-red-700" to="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Register;