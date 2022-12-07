import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

export const Navbars = () => {
    
  return (
<>
<div className="Navbar-div m-0 p-0">
    <div className="row justify-content-space-center m-0 p-0">
        <div className="col1 col-lg-3 col-md-4 col-sm-5  col-6 d-flex justify-content-center align-items-center"><h3>User Registration</h3></div>
        <div className="col1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center"><NavLink to="/"><h6 id="navbar-items">Home</h6></NavLink></div>
        <div className="col1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center"><NavLink to="/"><h6 id="navbar-items">Features</h6></NavLink></div>
    </div>
</div>
     
</>
  );
};
