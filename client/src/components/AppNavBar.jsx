import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Helper from "../utility/Helper.js";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/image/Logo.png";

const AppNavBar = () => {

    const logout=()=>{
        localStorage.clear();
        window.location.href="/"
    }

    return (
        <Navbar className=" sticky-top  shadow-sm ">
            <container-fluid>
                <Navbar.Brand href="/">
                    <img alt="" className="nav-logo" src={logo}/> <span className="nav-logo-text">BFOOD</span>
                </Navbar.Brand>
            </container-fluid>
        </Navbar>
    );
};

export default AppNavBar;