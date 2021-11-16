import React from 'react';
import "./navbar.scss" ;
import { NavLink } from "react-router-dom";

export default function Navbar({ productMenuOpen, setProductMenuOpen, burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li className="product"
                    onMouseEnter={() => setProductMenuOpen(productMenuOpen = true)}
                    onMouseLeave={() => setProductMenuOpen(productMenuOpen = false)}>
                        Products
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.8" height="8.135" viewBox="0 0 10.8 8.135">
                            <g id="Arrow" transform="translate(53.4 -129.1) rotate(90)">
                                <line id="line1" data-name="Line 1" x2="5.335" y2="4" transform="translate(130.5 44)" fill="none" stroke="#3a4466" stroke-linecap="round" stroke-width="2"/>
                                <line id="line2" data-name="Line 2" y1="4" x2="5.335" transform="translate(130.5 48)" fill="none" stroke="#3a4466" stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>


                    </li>
                    <li><NavLink exact to="/howitworks">How it works</NavLink></li>
                    <li><NavLink exact to="/pricing">Pricing</NavLink></li>
                </ul>
            </nav>
            <div className="wrapper">
                <NavLink exact to="/"><img src="assets/logo.svg" alt="observer logo" /></NavLink>
            </div>
            <div className="buttons">
                <a className="tel" href="tel:+449809112403">+44 9809 112 403</a>
                <NavLink exact to="/sign-up"><button className="signUp">Sign up</button></NavLink>
                <NavLink exact to="/login"><button className="login">Login</button></NavLink>
                <div className={"hamburger " + (burgerMenuOpen && "active")} onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    )
}
