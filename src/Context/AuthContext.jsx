import { createContext, useState, useCallback } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [user, setUser] = useState();

    const login = async (data) => {
        try {
            const response = await fetch(`${baseUrl}login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
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
                sessionStorage.setItem("token", result?.data?.access_token)
                setToken(result?.data?.access_token)
                const user = await getUser();
            }
            return {status : result?.status, value : msg}
        } catch (err) {
            console.log(err)
        }
    }

    const getUser = useCallback(async () => {
        try{
            const response = await fetch(`${baseUrl}user/role`, {
                method : "GET",
                headers: {  "Authorization" : `Bearer ${sessionStorage.getItem("token")}`,  "Content-Type": "application/json"},
            })

            if(!response.ok){
                throw new Error("Role fetch failed");
            }

            const result = await response.json();
            setUser(result?.data)
        }catch(err){
            console.log(err)
        }
    }, [])

    const logout = () => {
        sessionStorage.removeItem("token")
        setToken("");
    }

    return(
        <AuthContext.Provider
            value={{user, token, logout, login, getUser}}
        >
            {children}
        </AuthContext.Provider>
    ) 
}