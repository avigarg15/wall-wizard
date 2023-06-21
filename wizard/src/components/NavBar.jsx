import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import '../styles/navbar.css';

const NavBar = () => {
    const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
    const isAdmin = isAuthenticated && user.email === "garga9980@gmail.com"; // Replace "xyz@gmail.com" with your admin email

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row bg-dark">
                    <div className="col-20 mx-auto bg-dark">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Wall Wizard</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        {/* <li className="nav-item">
                                            <NavLink className="nav-link" to="/About">About</NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/ContactForm">Contact Us</NavLink>
                                        </li>
                                        {isAdmin && (
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/AddProducts">Add Product</NavLink>
                                            </li>
                                        )}
                                        <NavLink className="nav-link">
                                            {isAuthenticated && <p>Hi {user.name}</p>}
                                        </NavLink>
                                        {isAuthenticated ? (
                                            <li className="nav-link">
                                                <NavLink className="nav-link" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</NavLink>
                                            </li>
                                        ) : (
                                            <li className="nav-item">
                                                <NavLink className="nav-link" onClick={loginWithRedirect}>Login</NavLink>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
