import React from "react";
import './BlankBox.css';

export class BlankBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <>

            <div className="main-blankBox">
                {/* <div className="props-name-blankBox">
                    <h6 >{this.props.name}</h6>
                    <div>{this.props.heading}</div>
                </div> */}

                <div className="blankBox">

                </div>


            </div>

        </>
    }
}