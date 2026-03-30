import { useContext } from "react";
import { Outlet, Navigate, replace } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


export default function AuthLayout() {
  const { user } = useContext(AuthContext)
  if(user){
    return <Navigate to="/" replace={true} />
  }

  return (
    <Outlet />
  );
}
