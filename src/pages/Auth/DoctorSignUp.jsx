import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function DoctorSignUp() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({type : false, value : ""});
    const [errors, setErrors] = useState()
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [passShow, setPassShow] = useState([false, false]);
    const [data, setData] = useState(
        {first_name : "", last_name : "", email : "", phone : "", password : "", confirm_password : ""}
    )    

    const {role} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validate(data);
        setErrors(err)
        if (Object.entries(err).length < 1) {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    return new Error("Register Fetch Failed !");
                }

                const result = await response.json();
                let msg = '';
                if (typeof result.message === "string") {
                    msg = result.message;
                }
                else if (typeof result.message === "object" && result.message !== null) {
                    const firstErrorKey = Object.keys(result.message)[0];
                    if (firstErrorKey) {
                        msg = result?.message[firstErrorKey][0];
                    }
                }
                setMessage({type : result?.status, value : msg})
                if(result?.status){
                    setData({first_name : "", last_name : "", email : "", phone : "", password : "", confirm_password : ""})
                }
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const validate = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.first_name) {
            error.first_name = "First name is required !"
        }
        if (!values?.last_name) {
            error.last_name = "Last name is required !"
        }
        if (!values?.phone) {
            error.phone = "Phone number is required !"
        }else if(values?.phone.length != 10){
            error.phone = "Please enter valid phone!"
        }
        if (!values?.email) {
            error.email = "Email is required !"
        }else if (!regex.test(values.email)) {
            errors.email = "Email is not valid"
        }
        if (!values?.password) {
            error.password = "Password is required !"
        }else if(values?.password.length < 8){
            error.password = "Password should be minimum 8 characters"
        }
        if(!values?.confirm_password){
            error.password = "Confirm password is required !"
        }else if(values?.password !== values?.confirm_password){
            error.password = "Both password does not match !"
        }
        
        return error
    }

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
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label htmlFor="fname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">First Name</label>
                                            <div className="relative mt-1">
                                                <input type="text" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.first_name ? "border-red-600" : "border-gray-300" }`} placeholder="Enter your first name" id="fname" value={data?.first_name} onChange={(e) => setData(prev => ({...prev, first_name : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600 ${errors?.first_name ? "text-red-600" : "text-gray-300"}`}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            {errors?.first_name && <p className="text-xs text-red-600 mt-1">{errors?.first_name}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Last Name</label>
                                            <div className="relative mt-1">
                                                <input type="text" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.first_name ? "border-red-600" : "border-gray-300" }`} placeholder="Enter your last name" id="lname" value={data?.last_name} onChange={(e) => setData(prev => ({...prev, last_name : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600 ${errors?.first_name ? "text-red-600" : "text-gray-300"}`}>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            {errors?.last_name && <p className="text-xs text-red-600 mt-1">{errors?.last_name}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Email</label>
                                            <div className="relative mt-1">
                                                <input type="email" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.first_name ? "border-red-600" : "border-gray-300" }`} placeholder="info@gmail.com" id="email" value={data?.email} onChange={(e) => setData(prev => ({...prev, email : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600 ${errors?.first_name ? "text-red-600" : "text-gray-300"}`}>
                                                    <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </div>
                                            {errors?.email && <p className="text-xs text-red-600 mt-1">{errors?.email}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Phone</label>
                                            <div className="relative mt-1">
                                                <input type="tel" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.phone ? "border-red-600" : "border-gray-300" }`} placeholder="Enter your 10 digit number" id="phone" value={data?.phone} onChange={(e) => setData(prev => ({...prev, phone : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className={`absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 peer-focus:text-teal dark:text-gray-600 ${errors?.phone ? "text-red-600" : "text-gray-300"}`}>
                                                    <path d="M13.054,7.756c0,.552,.448,1,1,1s1.006,.462,1.006,1.031c0,.552,.448,1,1,1s1-.448,1-1c0-1.671-1.349-3.031-3.006-3.031-.552,0-1,.448-1,1Z" fill="currentColor" />
                                                    <path d="M13.784,4.687c2.991,0,5.425,2.47,5.425,5.506,0,.552,.448,1,1,1s1-.448,1-1c0-4.139-3.331-7.506-7.425-7.506-.552,0-1,.448-1,1s.448,1,1,1Z" fill="currentColor" />
                                                    <path d="M22.772,15.934c-.48-1.47-1.67-2.622-3.182-3.083-1.727-.526-3.596-.082-4.88,1.158l-.18,.174c-.915-.324-2.165-1.159-2.874-1.837-.699-.714-1.539-1.943-1.868-2.846l.167-.17c1.259-1.274,1.708-3.132,1.174-4.85-.467-1.499-1.631-2.676-3.114-3.149-1.694-.542-3.524-.096-4.788,1.162-.373,.326-2.765,2.575-2.116,6.072,.662,3.352,3.052,6.998,5.152,9.149,2.151,2.053,5.834,4.417,9.224,5.071,.414,.075,.81,.108,1.188,.108,2.829,0,4.628-1.875,4.919-2.2,1.276-1.254,1.728-3.074,1.178-4.76Zm-2.598,3.352c-.024,.023-.047,.048-.069,.074-.017,.019-1.666,1.931-4.249,1.46-2.965-.573-6.335-2.761-8.186-4.527-1.808-1.853-4.018-5.182-4.594-8.104-.468-2.52,1.395-4.128,1.47-4.192,.026-.021,.051-.044,.075-.068,.529-.535,1.232-.822,1.953-.822,.278,0,.559,.042,.834,.13,.862,.275,1.54,.962,1.812,1.839,.315,1.01,.051,2.103-.688,2.851l-.569,.577c-.224,.227-.326,.547-.275,.862,.253,1.561,1.692,3.515,2.562,4.403,.875,.838,2.848,2.261,4.416,2.511,.312,.051,.626-.051,.853-.269l.582-.563c.761-.735,1.876-.997,2.907-.683,.889,.271,1.585,.94,1.863,1.79,.315,.965,.048,2.012-.697,2.731Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            {errors?.phone && <p className="text-xs text-red-600 mt-1">{errors?.phone}</p>}
                                        </div>
                                        <div className="form-group col-span-2">
                                            <label htmlFor="password" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Password</label>
                                            <div className="relative mt-1">
                                                <input type={`${passShow[0] ? "text" : "password"}`} className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.password ? "border-red-600" : "border-gray-300" }`} placeholder="Enter Your Password" id="password" value={data?.password} onChange={(e) => setData(prev => ({...prev, password : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className={`absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600 ${errors?.password ? "text-red-600" : "text-gray-300"}`}>
                                                    <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(prev => {
                                                    let updated = [...prev];
                                                    updated[0] = !prev[0]
                                                    return updated
                                                })}>
                                                    {
                                                        passShow[0] ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                    }
                                                </span>
                                            </div>
                                            {errors?.password && <p className="text-xs text-red-600 mt-1">{errors?.password}</p>}
                                        </div>
                                        <div className="form-group col-span-2">
                                            <label htmlFor="confirm_password" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Condirm Password</label>
                                            <div className="relative mt-1">
                                                <input type={`${passShow[1] ? "text" : "password"}`} className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${errors?.confirm_password ? "border-red-600" : "border-gray-300" }`} placeholder="Confirm your Password" id="confirm_password" value={data?.confirm_password} onChange={(e) => setData(prev => ({...prev, confirm_password : e.target.value}))} />
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className={`absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600 ${errors?.confirm_password ? "text-red-600" : "text-gray-300"}`}>
                                                    <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path fillRule="evenodd" clip-rule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(prev => {
                                                    let updated = [...prev]
                                                    updated[1] = !prev[1]
                                                    return updated
                                                })}>
                                                    {
                                                        passShow[1] ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                    }
                                                </span>
                                            </div>
                                            {errors?.confirm_password && <p className="text-xs text-red-600 mt-1">{errors?.confirm_password}</p>}
                                        </div>
                                    </div>
                                    {message?.value && 
                                        <p className={`text-sm ${message?.type ? "text-green-600" : "text-red-600"}  mt-2`}>{message?.value}</p>
                                    }
                                    <button className={`justify-center px-4 py-3 bg-teal flex items-center w-full text-white rounded-xl mt-4 dark:text-white dark:bg-teal-dark dark:hover:bg-red-800 ${loading ? "opacity-80 cursor-not-allowed" : "cursor-pointer hover:bg-teal-dark"}`} disabled={loading}>
                                        {loading ? 
                                            <>
                                                <svg aria-hidden="true" role="status" className="w-4 h-4 me-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                </svg>
                                                Loading...
                                            </> : "Sign Up"
                                        }
                                    </button>
                                </form>
                                <p className="text-sm text gray-700 mt-4 dark:text-gray-300">Already have an account ? <Link className="text-teal hover:text-teal-dark" to="/login">Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DoctorSignUp;