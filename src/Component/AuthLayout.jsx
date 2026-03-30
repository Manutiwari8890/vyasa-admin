import { useContext } from "react";
import { Outlet, Navigate, replace } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


export default function AuthLayout() {
  const token = sessionStorage.getItem("token")
  if(token){
    return <Navigate to="/" replace={true} />
  }
  
  return (
    <Outlet />
  );
}
