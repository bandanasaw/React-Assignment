import React from "react";
import { BlankBox } from "./BlankBox";
import './Card.css';

export class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <>
            <div className="cards">
                <div className="card">
                  <div className="blankCard"></div>
                    <div className="card-info">
                        <span className="card-Category">{this.props.title}</span>
                        <h6 className="card-body">{this.props.cardBody}</h6>
                        <button className="card-button">Read More</button>

                    </div>

                </div>
            </div>
        </>
    }
}