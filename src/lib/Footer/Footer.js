import React from "react";
import './Footer.css';
import logo from '../../image/logo.png';


export class Footer extends React.Component {
    render() {
        return <>
            <div className="footer-container">

                <div className="footer">
                    <h2>Let's Discuss</h2>
                    <h6 className="para">Progravida nibh vel velit auctor sollicitudin, lorem quis bibendum auctor.</h6>
                </div>

                <div className="input-container">
                    <input></input>
                    <button className="signUp-button">Sign Up</button>
                </div>
            </div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="logo-image" src={logo}></img>

                            <h6 className="">
                                <p>progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum aby the readable</p>
                            </h6>
                        </div>

                        <div className="col">
                            <h4>Links</h4>
                            <ul className="list-unstyled">
                                <li>Our Clients</li>
                                <li>Privacy Police</li>
                                <li>Our Benefits</li>
                            </ul>

                        </div>
                        <div className="col">
                            <h4>Information</h4>
                            <ul className="list-unstyled">
                                <li>Our Clients</li>
                                <li>Privacy Police</li>
                                <li>Our Benefits</li>
                            </ul>

                        </div>
                        <div className="col">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>+91 9711999770, +1833-880-3355</li>
                                <li>info@bytequest.com</li>
                                <li>84,Block A,Sector 4,Noida,Up,201301</li>
                            </ul>

                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} ByteQuest Software Private Limited.All Rights Reserved.

                        </p>

                    </div>


                </div>

            </div>
        </>
    }
}