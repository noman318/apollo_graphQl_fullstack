import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="d-flex">
            {/* <img src={logo} alt="logo" className="mr-2" /> */}
            <div>Project Mgmt</div>
          </div>
        </Link>

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
          <Link style={{ marginRight: "10px" }} to={`/login`}>
            Login
          </Link>
          <Link to={`/register`}>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
