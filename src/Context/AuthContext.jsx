import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [user, setUser] = useState(localStorage.getItem("access_token"))

    const login = async (data) => {
        try {
            const response = await fetch(`${baseUrl}login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("Login Failed !")
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
            if (result?.status) {
                localStorage.setItem("access_token", result?.data?.access_token)
                setUser(result?.data?.access_token)
            }
            return {status : result?.status, value : msg}
        } catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        localStorage.removeItem("access_token")
        setUser("");
    }

    return(
        <AuthContext.Provider
            value={{user, logout, login}}
        >
            {children}
        </AuthContext.Provider>
    ) 
}