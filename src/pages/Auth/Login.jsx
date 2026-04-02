import { useContext, useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import ThemeToggle from "../../Component/ThemeToogle";
import { AuthContext } from "../../Context/AuthContext";

function Login() {
    const {login} = useContext(AuthContext);
    const [remember, setRemember] = useState(false);
    const [passShow, setPassShow] = useState(false);
    const [error, setError] = useState({});
    const [data, setData] = useState({
        email : "", password : ""
    })
    const [message, setMessage] = useState({type : false, value : ""});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(data)
        setError(errors)
        if(Object.entries(errors)?.length<1){
            setLoading(true);
            const result = await login(data)
            setLoading(false)
            setMessage({ type: result?.status, value: result?.value });
            if (result?.status) {
                navigate('/', replace);
            }
        }

    }

    function validate(values){
        let errors = {};
        if(!values.email){
            errors.email = "Email is required !" 
        }
        if(!values.password){
            errors.password = "Password is required !"
        }

        return errors;
    }

    return (
        <>
            <div className="min-h-screen content-center">
                <main className="w-full h-full" dir="ltr">
                    <div className="grid grid-cols-2 relative max-h-screen overflow-hidden">
                        <div className="bg-[url('/assets/images/login-bg.jpg')] max-h-screen bg-center bg-cover text-center content-center overflow-hidden w-full col-span-2 min-h-screen lg:col-span-1">
                            <img src="/assets/images/grid-01.svg" alt="" />
                        </div>
                        <div className="bg-white content-center overflow-y-scroll scrollbar dark:bg-gray-900 absolute -bottom-1 h-max w-full px-8 py-12 lg:px-15 lg:py-5 xl:px-25 lg:relative lg:h-screen">
                            <div className="w-full max-w-[600px] m-auto">
                                <h4 className="text-3xl font-bold text-gray-800 mb-3 dark:text-gray-300">Sign In</h4>
                                <p className="text-sm text-gray-500 mb-7 font-medium dark:text-gray-300">Enter your email and password to sign in !</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Email</label>
                                        <div className="relative mt-1">
                                            <input type="email" className={`peer text-sm w-full pr-4 py-3 pl-10 border-1  ${error?.email ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="info@gmail.com" id="email" value={data?.email} onChange={(e) => setData((prev) => ({...prev, email : e.target.value}))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none" className={`${error?.email ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                                <path d="M15.6578 6.85916L11.6786 10.063C10.9255 10.6534 9.86992 10.6534 9.11687 10.063L5.10352 6.85916" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.9749 1.67123H14.7701C16.0383 1.68545 17.2453 2.22157 18.1101 3.15471C18.9749 4.08786 19.4219 5.33659 19.3471 6.61007V12.6999C19.4219 13.9734 18.9749 15.2221 18.1101 16.1552C17.2453 17.0884 16.0383 17.6245 14.7701 17.6387H5.9749C3.25094 17.6387 1.41504 15.4227 1.41504 12.6999V6.61007C1.41504 3.88726 3.25094 1.67123 5.9749 1.67123Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                        {error?.email && <p className="text-xs text-red-600 mt-1">{error?.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-gray-700 text-sm font-semibold dark:text-gray-400">Password</label>
                                        <div className="relative mt-1">
                                            <input type={`${passShow ? "text" : "password"}`} className={`peer text-sm w-full pr-4 py-3 pl-10 border-1 ${error?.password ? "border-red-600" : "border-gray-300"} rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300`} placeholder="Enter Your Password" id="password"  value={data?.password} onChange={(e) => setData((prev) => ({...prev, password : e.target.value}))} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className={`${error?.email ? "text-red-600" : "text-gray-300"} absolute top-1/2 left-3 -translate-y-1/2 peer-focus:text-teal dark:text-gray-600`}>
                                                <path d="M12.8702 7.54742V5.5445C12.8702 3.20014 10.969 1.29891 8.62465 1.29891C6.28029 1.28865 4.37159 3.18055 4.36133 5.52584V5.5445V7.54742" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.1794 18.5572H5.0512C3.09772 18.5572 1.51367 16.9741 1.51367 15.0197V11.0185C1.51367 9.06411 3.09772 7.48099 5.0512 7.48099H12.1794C14.1329 7.48099 15.717 9.06411 15.717 11.0185V15.0197C15.717 16.9741 14.1329 18.5572 12.1794 18.5572Z" stroke="currentColor" strokeWidth="1.52655" strokeLinecap="round" strokeLinejoin="round"></path>
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
                                        {error?.password && <p className="text-xs text-red-600 mt-1">{error?.password}</p>}
                                    </div>
                                    <div className="flex justify-between items-center my-6">
                                        <div className="form-group">
                                            <label htmlFor="remember" className="flex items-center gap-2">
                                                <div className="relative h-[20px]">
                                                    <input type="checkbox" id="remember" className="w-5 h-5 appearance-none cursor-pointer border border-gray-300 checked:border-transparent rounded-md dark:border-gray-600 checked:bg-teal disabled:opacity-60 " onChange={() => setRemember(prev => !prev)} />
                                                    {remember &&
                                                        <svg className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="1.94437" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    }
                                                </div>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">Keep me logged in</p>
                                            </label>
                                        </div>
                                        <Link className="text-teal text-sm font-semibold hover:text-teal-dark" to="/forgot-password">Forgot Password ?</Link>
                                    </div>
                                    {message?.value && 
                                        <p className={`text-sm my-1 ${message?.type ? "text-green-600" : "text-red-600"}  mt-1`}>{message?.value}</p>
                                    }
                                    <button className={`text-center px-4 py-3 flex items-center justify-center bg-teal w-full text-white rounded-xl mt-4 dark:text-white  dark:bg-red-700 dark:hover:bg-red-800 ${loading ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:bg-teal-dark "}`}>
                                        {loading ?
                                            <>
                                                <svg aria-hidden="true" role="status" className="w-4 h-4 me-2 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                </svg>
                                                Loading...
                                            </> :
                                            "Sign in"
                                        }
                                    </button>
                                </form>
                                <p className="text-sm text gray-700 mt-4 dark:text-gray-300">Don't have an account ? <Link className="text-teal font-semibold hover:text-teal-dark" to="/signup/doctor">Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Login;