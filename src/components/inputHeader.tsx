import React from 'react'
import logo from './../imges/logo.png'

const InputHeader = () => {
  return (
    <div className="inputHeader">
      <img src={logo} alt="logo" width={75}></img>
      <div className="title">
        Welcome<span className="secondWord"> back!</span>
      </div>
      <p>Glad to see you, Again!</p>
    </div>
  );
}

export default InputHeader
