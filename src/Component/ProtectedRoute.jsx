import { useContext } from "react";
import { Navigate, Outlet, replace } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute(){
    const { user } = useContext(AuthContext);

    if(!user){
        return <Navigate to="/login" replace={true} />
    }

    return <Outlet />
}

export default ProtectedRoute;