import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            {/* <img src={logo} alt="logo" className="mr-2" /> */}
            <div>Project Mgmt</div>
          </div>
        </a>

        {/* <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={handleLogOut}
        >
          <div className="d-flex align-items-center">
            <h6>LogOut</h6>
          </div>
        </button> */}

        <div style={{ float: "right", marginRight: "10%" }}>
          <a style={{ marginRight: "10px" }} to={`/login`}>
            Login
          </a>
          <a to={`/register`}>Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
