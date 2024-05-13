import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link to="/" className="brand nav-link active" > GUvi</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
            <li className="nav-item">
                <Link className="nav-link active" to='/'> All </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/fullstack"> Fullstack</Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/cybersecurity'> CyberSecurity </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/datascience"> DataScience </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/carrer"> Carrer </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
