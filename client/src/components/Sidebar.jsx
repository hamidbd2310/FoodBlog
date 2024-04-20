import React from 'react';
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <Nav className="col-md-12 d-none d-md-block border-end sidebar" activeKey="/home">
                <div className="sidebar-sticky"></div>
                <Nav.Item className="menu" href="/">MENU</Nav.Item>
                <Nav.Item>
                
                <NavLink to="/create" className='btn' activeClassName='active-link'> <i className='bi bi-cart-dash-fill'></i> Create Food</NavLink>
                
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/" className='btn' activeClassName='active-link'> <i class="bi bi-journal-check"></i> All Food</NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
