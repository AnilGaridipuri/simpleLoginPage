import React, { useState } from "react";
import InputHeader from "./inputHeader";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, Link } from "react-router-dom";
import {  toast } from "react-toastify";

const LoginInputs = () => {
     const navigate =useNavigate()
     const [email, setEmail] = useState<string>("");
     const [password, setPassword] = useState<string>("");
     const [showPassword, setShowPassword] = useState<boolean>(false);

     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setEmail(e.target.value);
     };

     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setPassword(e.target.value);
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       console.log("Email:", email);
       console.log("Password:", password);
       if(!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$") || !email){
          toast.error("Please enter Valid Email")
       }else if (password.length < 6 ){
        toast.error("Password must be 8 characters");
      }else if (!password){
         toast.error("Please Enter Password");
       }else{
        toast.success("Successfully Login")
        navigate('/')
       }
     };

     const togglePasswordVisibility = () => {
       setShowPassword(!showPassword);
     };

  return (
    <div className="loginInputs">
      <div className="loginBody">
        <InputHeader />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className={
              email
                ? email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")
                  ? "input"
                  : "invalidInput"
                : "input"
            }
          />
          <div>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Your Password"
                minLength={6}
                
              />
              <div onClick={togglePasswordVisibility}>
                {!showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </div>
            </div>
            <div className="forgotPassword">
              <span>Forgot Password?</span>
            </div>
          </div>
          <button type="submit">Log In</button>
          <div className="hint">
            Don't have an account yet?
            <Link to="/register" className="secondWord">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginInputs