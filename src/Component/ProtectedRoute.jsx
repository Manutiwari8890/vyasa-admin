import { Navigate, Outlet, replace } from "react-router-dom";

function ProtectedRoute(){
    const user = localStorage.getItem("access_token")

    if(!user){
        return <Navigate to="/login" replace={true} />
    }

    return <Outlet />
}

export default ProtectedRoute;