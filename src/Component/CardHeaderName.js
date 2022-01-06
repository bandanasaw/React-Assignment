import React from "react";
import './CardHeaderName.css';

export class CardHeaderName extends React.Component{
    render(){
        return <>
        <div className="card-props-headername">
            <h6>{this.props.name}</h6>
            <h2 className="card-headerName">{this.props.headerName}</h2>
        </div>
        </>
    }
}