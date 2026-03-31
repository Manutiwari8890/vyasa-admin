import { useEffect, useState, useReducer, useRef } from "react";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";


const initial = {
    title: "", first_name: "", middle_name: "", last_name: "", phone: "", email : "", dob: new Date().toISOString().split("T")[0], specility: "", smcRegistration: "", designation: "", country: "", state: "", city: "", pincode: "", address1: "", registration_certificate: "", image_url : ""
}

const reducer = (prev, e) => {
    if (e.type === "SET_DATA") {
        return {
            ...prev,
            ...e.payload
        };
    }
    if (e.target) {
        return {
            ...prev,
            [e.target.name]: e.target.value
        };
    }
    return prev
}

function Profile() {
    const wrapperRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: false, value: "" });
    const [data, dispatch] = useReducer(reducer, initial)
    const [errors, setErrors] = useState()
    const [isDragging, setIsDragging] = useState(false);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [passShow, setPassShow] = useState([false, false, false]);
    const [editPass, setEditPass] = useState(false);
    const [password, setPassword] = useState({
        current_password : "", new_password : "", new_password_confirmation : ""
    });
    const [passLoading, setPassLoading] = useState(false);
    const [passMessage, setPassMessage] = useState({type : false, value : ""});
    const [passError, setPassError] = useState(null);



    useEffect(() => {
        const getUserDetail = async () => {
            try {
                const response = await fetch(`${baseUrl}user`, {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}`, "Content-Type": "application/json" },
                });
                if (!response.ok) {
                    throw new Error("User Fetch Failed");
                }
                const result = await response.json()
                dispatch({
                    type: "SET_DATA",
                    payload: {
                        title: result?.data?.title || "",
                        first_name: result?.data?.detail?.first_name || "",
                        middle_name: result?.data?.detail?.middle_name || "",
                        last_name: result?.data?.detail?.last_name || "",
                        phone: result?.data?.phone || "",
                        email: result?.data?.email || "",
                        dob: result?.data?.detail?.dob || "",
                        specility: result?.data?.detail?.speciality || "",
                        smcRegistration: result?.data?.detail?.registration_number || "",
                        designation: result?.data?.detail?.doctor_designation || "",
                        country: result?.data?.detail?.country || "",
                        state: result?.data?.detail?.state || "",
                        city: result?.data?.detail?.city || "",
                        pincode: result?.data?.detail?.pincode || "",
                        address1: result?.data?.detail?.address || "",
                        registration_certificate: result?.data?.detail?.certificate || "",
                        image_url: result?.data?.detail?.image_url || ""
                    }
                });
            } catch (err) {
                console.log(err)
            }
        }

        getUserDetail()
    }, [])


    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch({
                target: {
                    name: "registration_certificate",
                    value: reader.result,
                },
            });
        };
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const maxSize = 1024 * 1024;
        if (file.size > maxSize) {
            setErrors((prev) => ({ ...prev, [e.target.name]: "File size must be less than 1MB" }))
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch({
                target: {
                    name: e.target.name,
                    value: reader.result,
                },
            });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validate(data);
        setErrors(err)
        if (Object.entries(err).length < 1) {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}user`, {
                    method: "PUT",
                    headers: {  "Authorization" : `Bearer ${sessionStorage.getItem("token")}`,  "Content-Type": "application/json"},
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    return new Error("User Update Failed !");
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
                setMessage({ type: result?.status, value: msg })
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const validate = (values) => {
        const error = {};

        if (!values.first_name) {
            error.first_name = "First name is required !"
        }
        if (!values?.last_name) {
            error.last_name = "Last name is required !"
        }
        if (!values?.phone) {
            error.phone = "Phone number is required !"
        } else if (values?.phone.length == 10) {
            error.phone = "Please enter valid phone!"
        }
        if (!values?.dob) {
            error.dob = "DOB is required !"
        }
        if (!values?.specility) {
            error.specility = "Specility is required !"
        }
        if (!values?.smcRegistration) {
            error.smcRegistration = "SMC/MCI Registration Number is required !"
        }
        if (!values?.designation) {
            error.designation = "Designation is required !"
        }
        if (!values?.country) {
            error.country = "Country is required !"
        }
        if (!values?.state) {
            error.state = "State is required !"
        }
        if (!values?.city) {
            error.city = "City is required !"
        }
        if (!values?.pincode) {
            error.pincode = "Pincode is required !"
        }
        if (!values?.address1) {
            error.address1 = "Address is required !"
        }
        if (!values?.registration_certificate) {
            error.registration_certificate = "Registration certificate is required !"
        }
        return error
    }


    const handlePass = async (e) => {
        e.preventDefault();
        const error = validatePass(password)
        setPassError(error);
        if(Object.entries(error).length < 1){
            try {
                setPassLoading(true);
                const response = await fetch(`${baseUrl}user/change-password`, {
                    method : "PUT",
                    headers: {  "Authorization" : `Bearer ${sessionStorage.getItem("token")}`,  "Content-Type": "application/json"},
                    body : JSON.stringify(password)
                })

                if(!response.ok){
                    throw new Error("Password can not update");
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
                setPassMessage({type : result?.status, value : msg})
                setPassLoading(false);
                setPassword({current_password : "", new_password : "", new_password_confirmation : ""})
                setTimeout(() => {
                    setEditPass(false)
                }, 1000)
            } catch (err) {
                console.log(err);
            }
        }
    }

    const validatePass = (values) => {
        const error = {};

        if(!values?.current_password){
            error.current_password = "Current password is required !"
        }
        if(!values?.new_password){
            error.new_password = "New password is required !"
        }
        if(!values?.new_password_confirmation){
            error.new_password_confirmation = "Confirm new password is required !"
        }else if(values.new_password !== values.new_password_confirmation){
            error.new_password_confirmation = "Please make sure both passwords are the same."
        }
        return error
    }

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
                            <img src={`${data?.image_url ? data?.image_url : ""}`} alt="" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl font-semibold text-gray-700 mb-2">{data?.first_name} {data?.last_name}</h4>
                            <p className="text-base text-gray-500 flex gap-2"><span>Doctor </span> <span>|</span> <span>{data?.city}, {data?.country}</span></p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Link to={`tel:${data?.phone}`} className="inline-block w-12 h-12 content-center border border-gray-200 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 mx-auto"><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" fill="currentColor" /></svg>
                        </Link>
                        <Link to={`mailto:${data?.email}`} className="inline-block w-12 h-12 content-center border border-gray-200 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-5 h-5 m-auto"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" fill="currentColor"></path></svg>
                        </Link>
                    </div>

                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl mb-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-7 w-full gap-4 mb-6">
                            <div className="col-span-4 lg:col-span-10">
                                <h4 className="text-2xl text-gray-700 font-semibold mb-1 lg:mb-6">Personl Information</h4>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select" className="text-gray-700 text-sm font-medium dark:text-gray-400">Title</label>
                                <div className="relative mt-1">
                                    <select id="select" name="title" className="text-sm w-full p-3 pr-8 border-1 border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" value={data?.title} onChange={(e) => dispatch(e)}>
                                        <option value="dr">Dr.</option>
                                        <option value="prof">Prof.</option>
                                    </select>
                                    <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                            </div>
                            <div className="form-group col-span-3">
                                <label htmlFor="fname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">First Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="first_name" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 ${errors?.first_name ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="Enter your first name" id="fname" value={data?.first_name} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${errors?.first_name ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                {errors?.first_name && <p className="text-xs text-red-600 mt-1">{errors?.first_name}</p>}
                            </div>
                            <div className="form-group col-span-4 lg:col-span-3">
                                <label htmlFor="mname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Middle Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="middle_name" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="Enter your middle name" id="mname" value={data?.middle_name} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="form-group col-span-4 lg:col-span-3">
                                <label htmlFor="lname" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Last Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="last_name" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 ${errors?.last_name ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="Enter your last name" id="lname" value={data?.last_name} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${errors?.last_name ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                {errors?.last_name && <p className="text-xs text-red-600 mt-1">{errors?.last_name}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 mb-4 lg:grid-cols-3">
                            <div className="form-group">
                                <label htmlFor="phone" className="text-gray-700 text-sm font-medium dark:text-gray-400">Phone Number</label>
                                <div className="relative mt-1">
                                    <input type="tel" name="phone" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.phone ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="phone" placeholder="Enter your phone number" value={data?.phone} readOnly={true} />
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="21" height="19" className={`${errors?.phone ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" fill="currentColor" /></svg>
                                </div>
                                {errors?.phone && <p className="text-xs text-red-600 mt-1">{errors?.phone}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Email</label>
                                <div className="relative mt-1">
                                    <input type="email" name="email" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 ${errors?.email ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="info@gmail.com" id="email" value={data?.email} readOnly={true} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${errors?.email ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                {errors?.email && <p className="text-xs text-red-600 mt-1">{errors?.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob" className="text-gray-700 text-sm font-medium dark:text-gray-400">Date of birth</label>
                                <div className="relative mt-1" ref={wrapperRef}>
                                    <Flatpickr
                                        value={data?.dob}
                                        name="dob"
                                        id="dob"
                                        onChange={(_, dateStr) =>
                                        dispatch({
                                            target: {
                                            name: "dob",
                                            value: dateStr,
                                            },
                                        })
                                        }
                                        options={{
                                            dateFormat: "Y-m-d",
                                            monthSelectorType: "static",
                                            disableMobile: true,
                                            onReady: (_, __, fp) => {
                                                if (wrapperRef.current) {
                                                    wrapperRef.current.appendChild(fp.calendarContainer);
                                                }
                                            },
                                        }}
                                        className={`text-sm border-1 ${errors?.dob ? "border-red-600" : "border-gray-300"} p-3 rounded-lg outline-none w-full focus:outline-none focus:border-teal`}
                                    />
                                    <span className="absolute bg-white text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                                        <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z" fill="currentColor"></path></svg>
                                    </span>
                                </div>
                                {errors?.dob && <p className="text-xs text-red-600 mt-1">{errors?.dob}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="specility" className="text-gray-700 text-sm font-medium dark:text-gray-400">Specility</label>
                                <div className="relative mt-1">
                                    <select id="specility" name="specility" className={`text-sm w-full p-3 pr-8 border-1 ${errors?.specility ? "border-red-600" : "border-gray-300"} rounded-lg appearance-none focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} value={data?.specility} onChange={(e) => dispatch(e)}>
                                        <option value="">Select</option>
                                        <option value="medicine">Medicine</option>
                                        <option value="surgen">Surgen</option>
                                    </select>
                                    <svg className="absolute text-gray-700 dark:text-gray-400 right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.79175 8.02075L10.0001 13.2291L15.2084 8.02075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                {errors?.specility && <p className="text-xs text-red-600 mt-1">{errors?.specility}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="smcRegistration" className="text-gray-700 text-sm font-medium dark:text-gray-400">SMC/MCI Registration Number</label>
                                <div className="relative mt-1">
                                    <input type="number" name="smcRegistration" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.smcRegistration ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="smcRegistration" placeholder="SMC/MCI Registration Number" value={data?.smcRegistration} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" data-name="Layer 1" width="21" height="19" className={`${errors?.smcRegistration ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}><path d="m5 9.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm19 7.5v-10c0-2.757-2.243-5-5-5h-14c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5zm-5-13c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3v-10c0-1.654 1.346-3 3-3zm1 4c0-.552-.447-1-1-1h-5c-.553 0-1 .448-1 1s.447 1 1 1h5c.553 0 1-.448 1-1zm0 4c0-.552-.447-1-1-1h-5c-.553 0-1 .448-1 1s.447 1 1 1h5c.553 0 1-.448 1-1zm-2 4c0-.553-.447-1-1-1h-3c-.553 0-1 .447-1 1s.447 1 1 1h3c.553 0 1-.447 1-1zm-7.797.979c.541-.112.889-.642.776-1.183-.335-1.62-1.799-2.797-3.479-2.797s-3.144 1.177-3.479 2.797c-.112.541.235 1.07.776 1.183.538.107 1.07-.236 1.182-.776.145-.697.784-1.203 1.521-1.203s1.376.506 1.521 1.203c.109.544.654.889 1.182.776z" fill="currentColor" /></svg>
                                </div>
                                {errors?.smcRegistration && <p className="text-xs text-red-600 mt-1">{errors?.smcRegistration}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation" className="text-gray-700 text-sm font-medium dark:text-gray-400">Designation</label>
                                <div className="relative mt-1">
                                    <input type="text" name="designation" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.designation ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="designation" placeholder="Designation" value={data?.designation} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" data-name="Layer 1" width="21" height="19" className={`${errors?.designation ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}><path d="m24 9.5a3.5 3.5 0 1 0 -5 3.149v3.351a5 5 0 0 1 -10 0v-.151a7.513 7.513 0 0 0 6-7.349v-3a5.506 5.506 0 0 0 -5.5-5.5 1.5 1.5 0 0 0 0 3 2.5 2.5 0 0 1 2.5 2.5v3a4.5 4.5 0 0 1 -9 0v-3a2.5 2.5 0 0 1 2.5-2.5 1.5 1.5 0 0 0 0-3 5.506 5.506 0 0 0 -5.5 5.5v3a7.513 7.513 0 0 0 6 7.349v.151a8 8 0 0 0 16 0v-3.351a3.5 3.5 0 0 0 2-3.149z" fill="currentColor" /></svg>
                                </div>
                                {errors?.designation && <p className="text-xs text-red-600 mt-1">{errors?.designation}</p>}
                            </div>
                            <div className="col-span-1 lg:col-span-3">
                                <h4 className="text-2xl mt-4 text-gray-700 font-semibold mb-0">Address Information</h4>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country" className="text-gray-700 text-sm font-medium dark:text-gray-400">Country Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="country" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.country ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="country" placeholder="Country Name" value={data?.country} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" width="21" height="19" className={`${errors?.country ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <g id="_01_align_center">
                                            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" fill="currentColor" />
                                            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                {errors?.country && <p className="text-xs text-red-600 mt-1">{errors?.country}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="state" className="text-gray-700 text-sm font-medium dark:text-gray-400">State Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="state" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.state ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="state" placeholder="State Name" value={data?.state} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" width="21" height="19" className={`${errors?.state ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <g id="_01_align_center">
                                            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" fill="currentColor" />
                                            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                {errors?.state && <p className="text-xs text-red-600 mt-1">{errors?.state}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city" className="text-gray-700 text-sm font-medium dark:text-gray-400">City Name</label>
                                <div className="relative mt-1">
                                    <input type="text" name="city" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.city ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="city" placeholder="City Name" value={data?.city} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" width="21" height="19" className={`${errors?.city ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <g id="_01_align_center">
                                            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" fill="currentColor" />
                                            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                {errors?.city && <p className="text-xs text-red-600 mt-1">{errors?.city}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="pincode" className="text-gray-700 text-sm font-medium dark:text-gray-400">Pincode</label>
                                <div className="relative mt-1">
                                    <input type="number" name="pincode" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.pincode ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} id="pincode" placeholder="Pincode" value={data?.pincode} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" width="21" height="19" className={`${errors?.pincode ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <g id="_01_align_center">
                                            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" fill="currentColor" />
                                            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                {errors?.pincode && <p className="text-xs text-red-600 mt-1">{errors?.pincode}</p>}
                            </div>
                            <div className="form-group lg:col-span-2">
                                <label htmlFor="address1" className="text-gray-700 text-sm font-medium dark:text-gray-400">Address</label>
                                <div className="relative mt-1">
                                    <input type="text" name="address1" id="address1" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.address1 ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="House No. ( Colony Name )" value={data?.address1} onChange={(e) => dispatch(e)} />
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" width="21" height="19" className={`${errors?.address1 ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <g id="_01_align_center">
                                            <path d="M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z" fill="currentColor" />
                                            <path d="M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                                {errors?.address1 && <p className="text-xs text-red-600 mt-1">{errors?.address1}</p>}
                            </div>
                            <div className="form-group lg:col-span-2">
                                <h6 className="text-sm font-medium mb-2 text-gray-700">Upload registration certificate (PDF/JPG)</h6>
                                <label htmlFor="dropFile" className={`group text-gray-600 text-sm font-medium block w-full min-h-40 border-2 border-dashed rounded-xl text-center content-center cursor-pointer duration-200 ${isDragging ? "border-[#00a874] bg-[#e1fdf0]" : "border-gray-300 hover:border-gray-600 "} ${errors?.registration_certificate ? "border-red-600" : ""}`}
                                    data-name="registration_certificate"
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                >
                                    <input type="file" accept=".jpg,.jpeg,.pdf" name="registration_certificate" className="text-gray-500 text-sm w-[1px] h-[1px] hidden border-1 border-gray-300 rounded-lg  hover:file:bg-gray-100 focus:outline-none focus:border-teal dark:border-gray-600 dark:text-gray-300" id="dropFile" onChange={handleFileChange} key={data.registration_certificate ? "hasFile" : "noFile"} />
                                    <svg className="fill-current w-8 h-8 mx-auto duration-200 mb-3 group-hover:w-9 group-hover:h-9" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"></path></svg>
                                    <h4 className="text-base font-semibold text-gray-700 mb-2">{isDragging ? "Drop File Here" : "Drag & Drop Files Here"}</h4>
                                    <p className="text-xs text-gray-500 font-[400] max-w-3/5 mx-auto">Drag and drop your PNG, JPG, WebP, SVG images here or browse</p>
                                </label>
                                {errors?.registration_certificate && <p className="text-xs text-red-600 mt-1">{errors?.registration_certificate}</p>}
                                {data?.registration_certificate && (() => {
                                    const file = data.registration_certificate;

                                    const isString = typeof file === "string";

                                    const isBase64 = isString && file.startsWith("data:image");
                                    const isURL = isString && file.startsWith("http");

                                    const isImageFile = !isString && file?.type?.startsWith("image");
                                    const isPDF = (!isString && file?.type === "application/pdf") || (isString && file?.includes(".pdf"));

                                    return (
                                        <div className="mt-4">
                                            <a href={`${data?.registration_certificate}`} className="rounded-xl w-16 h-16 flex items-center justify-center border border-gray-200 p-2" target="_blank">
                                                {(isBase64 || isURL || isImageFile) ? (
                                                    <img
                                                    src={
                                                        isBase64 || isURL
                                                        ? file
                                                        : URL.createObjectURL(file)
                                                    }
                                                    className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ) : isPDF ? (
                                                    <img
                                                    src="/assets/images/PDF_icon.png"
                                                    className="w-10 h-10 object-contain"
                                                    />
                                                ) : (
                                                    <div className="text-xs">File</div>
                                                )}
                                            </a>
                                        </div>
                                    );
                                })()}
                            </div>
                            <div className="form-group">
                                <label htmlFor="image_url" className="text-gray-700 text-sm font-medium dark:text-gray-400">Profile image</label>
                                <div className="relative mt-1">
                                    <input type="file" name="image_url" id="image_url" className={`peer text-sm w-full pr-3 py-3 pl-10 border-1 ${errors?.image_url ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} onChange={handleFileChange} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${errors?.first_name ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0254 6.17845C8.0254 4.90629 9.05669 3.875 10.3289 3.875C11.601 3.875 12.6323 4.90629 12.6323 6.17845C12.6323 7.45061 11.601 8.48191 10.3289 8.48191C9.05669 8.48191 8.0254 7.45061 8.0254 6.17845ZM10.3289 2.375C8.22827 2.375 6.5254 4.07786 6.5254 6.17845C6.5254 8.27904 8.22827 9.98191 10.3289 9.98191C12.4294 9.98191 14.1323 8.27904 14.1323 6.17845C14.1323 4.07786 12.4294 2.375 10.3289 2.375ZM8.92286 11.03C5.7669 11.03 3.2085 13.5884 3.2085 16.7444V17.0333C3.2085 17.4475 3.54428 17.7833 3.9585 17.7833C4.37271 17.7833 4.7085 17.4475 4.7085 17.0333V16.7444C4.7085 14.4169 6.59533 12.53 8.92286 12.53H11.736C14.0635 12.53 15.9504 14.4169 15.9504 16.7444V17.0333C15.9504 17.4475 16.2861 17.7833 16.7004 17.7833C17.1146 17.7833 17.4504 17.4475 17.4504 17.0333V16.7444C17.4504 13.5884 14.8919 11.03 11.736 11.03H8.92286Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                {errors?.image_url && <p className="text-xs text-red-600 mt-1">{errors?.image_url}</p>}
                            </div>
                        </div>
                        <button className={`text-center px-10 py-3 flex items-center gap-0 bg-teal w-max text-white rounded-xl mt-4 ${loading ? "opacity-80 cursor-not-allowed" : "cursor-pointer hover:bg-teal-dark"}`} disabled={loading}>
                            {loading ?
                                <>
                                    <svg aria-hidden="true" role="status" className="w-4 h-4 me-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Loading...
                                </> : "Update profile"
                            }
                        </button>
                        {message?.value &&
                            <p className={`text-sm ${message?.type ? "text-green-600" : "text-red-600"}  mt-1`}>{message?.value}</p>
                        }
                    </form>
                </div>
                <div className="p-5 bg-white border border-gray-200 rounded-2xl ">
                    <h4 className="text-base font-semibold text-gray-700 mb-5">Update Password</h4>
                    <button className="text-base font-semibold text-gray-600 bg-gray-100 flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-700" onClick={() => setEditPass(true)}>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z" fill="currentColor"></path></svg>
                        Edit Password
                    </button>
                    {editPass &&
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]" onClick={() => setEditPass(false)}>
                            <div className="bg-white border border-gray-200 shadow-xs p-8 px-10 w-1/2 rounded-3xl" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2">Update your password</h3>
                                        <p className="text-sm font-medium text-gray-500">For security reasons, please enter your current password and a new password.</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 content-center cursor-pointer hover:bg-gray-200"
                                        onClick={() => { setEditPass(false); }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto"><path fillRule="evenodd" clipRule="evenodd" d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z" fill="currentColor"></path></svg>
                                    </button>
                                </div>
                                <form onSubmit={handlePass}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="cpassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Current Password</label>
                                        <div className="relative mt-2">
                                            <input type={`${passShow[0] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your Current Password" id="cpassword" name="current_password" value={password?.current_password} onChange={(e) => setPassword(prev => ({...prev, current_password : e.target.value}))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                                <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index == 0 ? !pass : pass))}>
                                                {
                                                    passShow[0] ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                }
                                            </span>
                                        </div>
                                        {passError?.current_password && <p className="text-xs text-red-600 mt-1">{passError?.current_password}</p>}
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="npassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">New Password</label>
                                        <div className="relative mt-2">
                                            <input type={`${passShow[1] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Enter Your New Password" id="npassword" name="new_password" value={password?.new_password} onChange={(e) => setPassword(prev => ({...prev, new_password : e.target.value}))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                                <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index == 1 ? !pass : pass))}>
                                                {
                                                    passShow[1] ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                }
                                            </span>
                                        </div>
                                        {passError?.new_password && <p className="text-xs text-red-600 mt-1">{passError?.new_password}</p>}
                                    </div>
                                    <div className="form-group mb-6">
                                        <label htmlFor="cnpassword" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Confirm New Password</label>
                                        <div className="relative mt-2">
                                            <input type={`${passShow[2] ? "text" : "password"}`} className="peer text-sm w-full pr-4 py-3 pl-10 border-1 border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300" placeholder="Confirm Your New Password" id="cnpassword" name="new_password_confirmation" value={password?.new_password_confirmation} onChange={(e) => setPassword(prev => ({...prev, new_password_confirmation : e.target.value}))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="text-gray-300 absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600">
                                                <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.61586 11.9832V14.0552" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            <span className="p-2 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400 cursor-pointer" onClick={() => setPassShow(passShow?.map((pass, index) => index == 2 ? !pass : pass))}>
                                                {
                                                    passShow[2] ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><g id="_01_align_center" data-name="01 align center"><path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" fill="currentColor" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" fill="currentColor" /></g></svg> :
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" className="w-4 h-4 mx-auto"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" fill="currentColor" /></svg>
                                                }
                                            </span>
                                        </div>
                                        {passError?.new_password_confirmation && <p className="text-xs text-red-600 mt-1">{passError?.new_password_confirmation}</p>}
                                    </div>
                                    {passMessage?.value &&
                                        <p className={`text-sm ${passMessage?.type ? "text-green-600" : "text-red-600"}  my-1`}>{passMessage?.value}</p>
                                    }
                                    <div className="flex items-center justify-end gap-4 col-span-2">
                                        <button className="bg-gray-100 rounded-lg text-base text-gray-700 px-6 py-3 cursor-pointer hover:bg-gray-200" type="button" onClick={() => setEditPass(false)}>Close</button>
                                        <button className={`text-center px-10 py-3 flex items-center gap-0 bg-teal w-max text-white rounded-xl ${passLoading ? "opacity-80 cursor-not-allowed" : "cursor-pointer hover:bg-teal-dark"}`} disabled={passLoading}>
                                            {passLoading ?
                                                <>
                                                    <svg aria-hidden="true" role="status" className="w-4 h-4 me-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                    </svg>
                                                    Loading...
                                                </> : "Update Password"
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Profile;