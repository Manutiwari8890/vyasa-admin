import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Otp(){
    const [value, setValue] = useState([]);
    const inputsRef = useRef([]);
    const handleChange = (e, index) => {
        const value = e.target.value;
        setValue((prev) => [...prev, value])
        if (!/^\d?$/.test(value)) return;

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && e.target.value && index > -1) {
            const updated = [...value];
            updated[index] = "";
            setValue(updated)
            inputsRef.current[index - 1].focus();
        }
        if(e.key === "ArrowLeft"){inputsRef.current[index - 1].focus();}
        if(e.key === "ArrowRight"){inputsRef.current[index + 1].focus();}
    };

    return (
        <>
            <div className="min-h-screen content-center">
                <main className="w-full h-full" dir="ltr">
                    <div className="grid grid-cols-2 relative">
                        <div className="bg-white h-screen px-25 py-5 content-center overflow-y-scroll scrollbar dark:bg-gray-900">
                            <div className="w-full max-w-[600px] m-auto">
                                <Link to="/" className="text-sm text-gray-500 flex gap-1 mb-15 items-center hover:text-gray-700"><svg className="stroke-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.7083 5L7.5 10.2083L12.7083 15.4167" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> Back to dashboard</Link>
                                <h4 className="text-3xl font-bold text-gray-800 mb-3 dark:text-gray-300">Forgot Your Password?</h4>
                                <p className="text-sm text-gray-500 mb-7 font-medium dark:text-gray-300">Enter the email address linked to your account, and we’ll send you a link to reset your password.</p>
                                <form>
                                    <div className="form-group mb-4">
                                        <label className="text-gray-700 text-sm font-semibold dark:text-gray-400">Type your 6 digits security code</label>
                                        <div className="flex gap-4 items-center mt-2">
                                            {[...Array(6)].map((_, index) => (
                                                <input 
                                                    key={index}
                                                    type="text" 
                                                    maxLength={1}  
                                                    value={value[index]}
                                                    ref = {(el) => inputsRef.current[index]=el}
                                                    onChange={(e) => handleChange(e, index)}
                                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                                    className="w-14 h-12 border border-gray-200 rounded-lg outline-none text-center text-lg font-semibold text-gray-600" />
                                            ))}
                                        </div>
                                    </div>
                                    <button className="text-center px-4 py-3 bg-red-600 w-full text-white rounded-xl mt-4 cursor-pointer hover:bg-red-700 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800">Verify My Account</button>
                                </form>
                                <p className="text-sm text gray-700 mt-4 dark:text-gray-300">Didn’t get the code ? <Link className="text-red-600 hover:text-red-700" to="/">Resend</Link></p>
                            </div>
                        </div>
                        <div className="bg-[url('/assets/images/login-bg.jpg')] min-h-screen bg-center bg-cover text-center content-center">
                            <img src="/assets/images/grid-01.svg" alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Otp;