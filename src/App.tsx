import React from "react";
import { HashRouter, Routes, Route,Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import InputHeader from "./components/inputHeader";



function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

function Home() {
  return(
  <div className='home'>
      <InputHeader/>
      <Link className='loginBtn' to={'/login'}>Login</Link>
  </div> 
  )
}

export default App;
