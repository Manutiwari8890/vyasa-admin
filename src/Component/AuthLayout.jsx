import { Outlet, Navigate, replace } from "react-router-dom";


export default function AuthLayout() {
  const user = localStorage.getItem("access_token")
  if(user){
    return <Navigate to="/" replace={true} />
  }

  return (
    <Outlet />
  );
}
