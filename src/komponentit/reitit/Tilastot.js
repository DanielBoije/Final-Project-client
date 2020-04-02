import React, { Component } from 'react';
import Häiriöt from "./tilastot/Häiriöt"
import Tavoitteet from "./tilastot/Tavoitteet"
import Häiriöhaku from "./tilastot/Häiriöhaku"
import Tavoitehaku from "./tilastot/Tavoitehaku"
import {addPiirakka, addTavoite} from "./tilastot/tilastoService"
import './Tilastot.css'
class tilastot extends Component {
    state= {
        showpiirakka: false,
        showtavoite: false,
        piirakkavastaus: {},
        tavoitevastaus: {}  
    }

    lisääPiirakka = (data) => {
        addPiirakka(data).then(async res => {
            console.log(res)
            await this.setState({showpiirakka: true, piirakkavastaus: res.data})
            console.log(this.state)
            })
    }
    lisääTavoite = (data) => {
        addTavoite(data).then(async res => {
            console.log(res)
            await this.setState({showtavoite: true, tavoitevastaus: res.data})
            console.log(this.state)
            })
    }

    render() {
        const piirakkatiedot = this.state.piirakkavastaus
        const tavoitetiedot = this.state.tavoitevastaus
        return (
            <div className="koko">
                {/* <div style={divi}> */}
                <div className="tilastot1">
                    <Häiriöhaku
                        handleChange={this.handleChange}
                        lisääPiirakka={this.lisääPiirakka}
                    />
                    {this.state.showpiirakka ? <Häiriöt tiedot={piirakkatiedot}/> : ""}
                </div>
                <br/>
                {/* <div style={divi2}> */}
                <div className="tilastot2">
                    <Tavoitehaku
                        handleChange={this.handleChange}
                        lisääTavoite={this.lisääTavoite}
                    />
                    {this.state.showtavoite ? <Tavoitteet tiedot={tavoitetiedot}/> : ""}
                </div>
            </div>
        );
    }
}

// const divi = {
//     margin: "100px",
//     display: "flex",
   
// }
// const divi2 = {
//     margin: "100px",
//     display: "flex"
// }

export default tilastot;