import React, { Component } from 'react';
import Häiriöt from "./tilastot/Häiriöt"
import Tavoitteet from "./tilastot/Tavoitteet"
import Pohjahaku from "./tilastot/Pohjahaku"

class tilastot extends Component {
    state= {
        showkakku: false
    }
    
    // handleChange = () => {
    // }

    naytaKakku = () => {
        this.setState({showkakku:true})
    }

    render() {
        // const linja = this.state.linja
        return (
            <div>
                <div style={divi}>
                    <Pohjahaku
                        handleChange={this.handleChange}
                        naytaKakku={this.naytaKakku}
                        // linja={linja}
                    />
                    {this.state.showkakku ? <Häiriöt/> : ""}
                </div>
                {/* <Tavoitteet/> */}
            </div>
        );
    }
}

const divi = {
    margin: "100px",
    display: "flex"
}

export default tilastot;