import React from "react";
import './Navbar.css';
import logo from '../image/logo.png';

export class Navbar extends React.Component {
    render() {
        return <>
            <div className="main-nav">
                <div className="logo">
                <img className="logo-image" src={logo}></img>
                </div>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div className="button-container">
                    <button className="button">Contact Us</button>
                </div>

            </div>
            <div className="blank-container">

            </div>

        </>
    }
}