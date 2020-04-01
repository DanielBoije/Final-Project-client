import React, { Component } from 'react';
import Häiriöt from "./tilastot/Häiriöt"
// import Tavoitteet from "./tilastot/Tavoitteet"
import Pohjahaku from "./tilastot/Pohjahaku"
import {addPiirakka} from "./tilastot/tilastoService"

class tilastot extends Component {
    state= {
        showkakku: false,
        piirakkavastaus: {}     
    }

    lisääPiirakka = (data) => {
        addPiirakka(data).then(async res => {
            console.log(res)
            await this.setState({showkakku: true, piirakkavastaus: res.data})
            console.log(this.state)
            })
    }

    render() {
        const piirakkatiedot = this.state.piirakkavastaus
        return (
            <div>
                <div style={divi}>
                    <Pohjahaku
                        handleChange={this.handleChange}
                        naytaKakku={this.naytaKakku}
                        lisääPiirakka={this.lisääPiirakka}
                        // linja={linja}
                    />
                    {this.state.showkakku ? <Häiriöt tiedot={piirakkatiedot}/> : ""}
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