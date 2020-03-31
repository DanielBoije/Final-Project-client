import React, { Component } from 'react'

export default class Tuotteet extends Component {
    poista = () => {
        this.props.poista(this.props.lista.tuotenro)
    }
    render() {
        return (
            <tr style={list}>
                <td>{this.props.lista.tuotenro}<br></br>
                {this.props.lista.tuotenimi}</td>
                <td>{this.props.lista.tuntitavoite}</td>
                {/* <td><button type="button">&#9998;</button></td> */}
                <td><button style={poista} type="button" onClick={this.poista}>&#10005;</button></td>
            </tr>
        )
    }
}

const list = {
    textAlign: "left"
}

const poista = {
    color: "red"
}