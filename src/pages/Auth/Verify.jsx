import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


function Verify() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [searchParams] = useSearchParams();
    const uid = searchParams.get('uid');
    const hash = searchParams.get('hash');
    const [message, setMessage] = useState({ type: false, value: "" })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                setLoading(true)
                const response = await fetch(`${baseUrl}email/verify/${uid}/${hash}`);

                if (!response.ok) {
                    throw new Error("Verify Failed")
                }

                const result = await response.json();
                setMessage({ type: result?.status, value: result?.message })
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        if (uid && hash) {
            verifyEmail()
        }
    }, [])

    return (
        <>
            <div className="min-h-screen content-center bg-gray-50">
                <main className="w-full h-full" dir="ltr">
                    <div className="container mx-auto px-5 lg:px-10">
                        {loading ?
                            <div className="w-15 h-15 border-8 border-teal border-l-transparent rounded-full animate-spin mx-auto"></div> :
                            <div className="bg-white py-8 px-4 my-10 border border-gray-200 shadow-xs rounded-3xl content-center overflow-hidden max-w-100 min-h-75 mx-auto lg:px-8 relative">
                                <div className="absolute top-0 h-20 w-full left-0 bg-gradient-to-b from-teal/20 to-transparent"></div>
                                <div className="bg-white/10 p-2 rounded-full border border-gray-200 w-max mx-auto animate-bounce mb-8">
                                    <div className="bg-teal w-20 h-20 rounded-full content-center">
                                        {message?.type ?
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="text-white w-10 h-10 mx-auto">
                                                <path d="m12.001,12.821l8.442-8.385c.587-.583,1.538-.58,2.121.007.584.588.58,1.538-.008,2.122l-8.441,8.385c-.708.704-1.64,1.056-2.572,1.056s-1.857-.35-2.566-1.049l-2.475-2.447c-.589-.582-.595-1.532-.012-2.121.582-.589,1.533-.595,2.121-.012l2.474,2.446c.252.249.664.25.916-.001Zm10.499-2.321c-.828,0-1.5.671-1.5,1.5,0,.076-.021.188-.118.285l-2.442,2.442c-.281.281-.439.663-.439,1.061v1.712c0,.275-.225.5-.5.5h-1.712c-.397,0-.779.158-1.061.439l-2.442,2.442c-.158.156-.412.156-.57,0l-2.442-2.442c-.281-.281-.663-.439-1.061-.439h-1.712c-.275,0-.5-.225-.5-.5v-1.712c0-.397-.158-.779-.439-1.061l-2.442-2.442c-.098-.098-.118-.209-.118-.285s.021-.187.118-.285l2.442-2.443c.281-.281.439-.663.439-1.061v-1.712c0-.276.225-.5.5-.5h1.712c.397,0,.779-.158,1.061-.439l2.442-2.442c.158-.157.412-.157.57,0l2.442,2.442c.586.586,1.535.586,2.121,0,.586-.585.586-1.536,0-2.121l-2.442-2.442c-1.326-1.327-3.486-1.327-4.812,0l-2.003,2.003h-1.091c-1.93,0-3.5,1.57-3.5,3.5v1.091l-2.003,2.003c-.643.643-.997,1.497-.997,2.406s.354,1.764.997,2.406l2.003,2.003v1.091c0,1.93,1.57,3.5,3.5,3.5h1.091l2.003,2.003c.663.663,1.535.995,2.406.995s1.743-.332,2.406-.995l2.003-2.003h1.091c1.93,0,3.5-1.57,3.5-3.5v-1.091l2.002-2.002c.644-.643.998-1.498.998-2.407,0-.829-.672-1.5-1.5-1.5Z" fill="currentColor" />
                                            </svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" className="text-white w-10 h-10 mx-auto">
                                                <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" fill="currentColor" />
                                            </svg>
                                        }
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-center text-gray-700">{message?.value}</h4>
                            </div>
                        }
                    </div>
                </main>
            </div>
        </>
    )
}

export default Verify;