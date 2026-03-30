import { useContext, useEffect } from "react";
import { Navigate, Outlet, replace } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute(){
    const { user, getUser, token } = useContext(AuthContext);
    useEffect(() => {
        if(!user && token){
            getUser()
        }
    },[getUser])
    if(!token){
        return <Navigate to="/login" replace={true} />
    }

    return <Outlet />
}

export default ProtectedRoute;