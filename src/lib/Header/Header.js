import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export class Header extends React.Component {
    render() {
        return <>
            <div className="header-container">
                <div className="header-content">
                    <div>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        info@bytequests.com
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        +91 97119997770, +1833-880-3355
                    </div>

                </div>


            </div>
        </>
    }
}