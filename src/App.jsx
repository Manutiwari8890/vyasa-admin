import { lazy } from "react";
import { Routes, Route} from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";

const AuthLayout = lazy(() => import('./Component/AuthLayout'));
const DashboardLayout = lazy(() => import('./Component/DashboardLayout'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Verify = lazy(() => import('./pages/Auth/Verify'));
const DoctorSignUp = lazy(() => import('./pages/Auth/DoctorSignUp'));
const Register = lazy(() => import('./pages/Register'));
const Index = lazy(() => import('./pages/Index'));
const Calender = lazy(() => import('./pages/Calender'));
const Otp = lazy(() => import('./pages/Otp'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));
const Reset = lazy(() => import('./pages/Auth/Reset'));
const Chat = lazy(() => import('./pages/Chat'));
const Profile = lazy(() => import('./pages/Profile'));
const Forms = lazy(() => import('./pages/Forms'));
const FormLayout = lazy(() => import('./pages/FormLayout'));
const Tables = lazy(() => import('./pages/Tables'));
const Error = lazy(() => import('./pages/Error'));

function App(){

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="verify-email" element={<Verify />} />
          <Route path="/signup/doctor" element={<DoctorSignUp />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/two-step-verification" element={<Otp />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Index />} />
            <Route path="calender" element={<Calender />} />
            <Route path="forms" element={<Forms />} />
            <Route path="basic-tables" element={<Tables />} />
            <Route path="form-layout" element={<FormLayout />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;