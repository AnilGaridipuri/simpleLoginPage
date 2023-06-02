import React, { useState } from "react";
import InputHeader from "./inputHeader";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterInputs = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", name);
    if (!name.match(/^[a-zA-Z\s'-]+$/)) {
      toast.error("Please enter a valid name");
    } else if (
      !email.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$") ||
      !email
    ) {
      toast.error("Please enter a valid email");
    } else if (password.length < 6) {
      toast.error("Password must be at least 8 characters");
    } else if (!password) {
      toast.error("Please enter a password");
    } else {
      toast.success("Successfully Registered");
      navigate("/");
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
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            pattern="^[a-zA-Z\s'-]+$"
            className={
              name
                ? name.match("^[a-zA-Z\\s'-]+$")
                  ? "input"
                  : "invalidInput"
                : "input"
            }
          />
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
          <button type="submit">Register</button>
          <div className="hint">
            Do have an account yet?
            <Link to="/login" className="secondWord">
             {" "} Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterInputs;
