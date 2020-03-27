import React, { Component } from 'react';
import Häiriöt from "./tilastot/Häiriöt"
import Tavoitteet from "./tilastot/Tavoitteet"

class tilastot extends Component {
    render() {
        return (
            <div style={divi}>
                <Häiriöt/>
                <Tavoitteet/>
            </div>
        );
    }
}

const divi = {
    margin: "100px",
    display: "flex"
}

export default tilastot;