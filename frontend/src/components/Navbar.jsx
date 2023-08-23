import React from "react";
import './Navbar.css';

import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart);

    return ( 
        <div className="navbar">
            <div className="imgWrapper" onClick={() => navigate("/")}><img src={logo}></img></div>
            <div className="navLinks">
                <a onClick={() => navigate("/about")}>About</a>
                <a onClick={() => navigate("/contact")}>Contact</a>
                <a onClick={() => navigate("/todo")}>Todo</a>

            </div>
            <div>
                <span><FontAwesomeIcon icon={faCartShopping} /></span> &nbsp;
                <span>{cart.quantity}</span> &nbsp;
                <span>&#x20B9; {cart.total}.00</span>
            </div>
        </div>
    )
}

export default Navbar;