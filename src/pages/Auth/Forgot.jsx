import { Link } from "react-router-dom";
import { useState } from "react";

function Forgot(){
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email){
            setError("Email is required !")
        }else{
            console.log("success")
        }

    }


    return (
        <>
            <div className="min-h-screen content-center">
                <main className="w-full h-full" dir="ltr">
                    <div className="grid grid-cols-2 relative max-h-screen overflow-hidden">
                        <div className="bg-white content-center overflow-y-scroll scrollbar dark:bg-gray-900 absolute -bottom-1 h-max w-full px-8 py-12 lg:px-15 lg:py-5 xl:px-25 lg:relative lg:h-screen">
                            <div className="w-full max-w-[600px] m-auto">
                                <h4 className="text-3xl font-bold text-gray-800 mb-3 dark:text-gray-300">Forgot Password</h4>
                                <p className="text-sm text-gray-500 mb-7 font-medium dark:text-gray-300">A verification code has been sent to your mobile. Please enter it in the field below.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Email</label>
                                        <div className="relative mt-1">
                                            <input type="email" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1  ${error ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="info@gmail.com" id="email" value={email} onChange={(e) => setEmail((prev) => (e.target.value))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${error ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                                <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
                                    </div>
                                    <button className="text-center px-4 py-3 bg-teal w-full text-white rounded-xl mt-4 cursor-pointer hover:bg-teal-dark dark:text-white  dark:bg-teal-dark dark:hover:bg-red-800">Send Reset Link</button>
                                </form>
                                <p className="text-sm text gray-700 mt-4 dark:text-gray-300">Wait, I remember my password... <Link className="text-teal font-semibold hover:text-teal-dark" to="/login">Login here</Link></p>
                            </div>
                        </div>
                        <div className="bg-[url('/assets/images/login-bg.jpg')] max-h-screen bg-center bg-cover text-center content-center overflow-hidden w-full col-span-2 min-h-screen lg:col-span-1">
                            <img src="/assets/images/grid-01.svg" alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Forgot;