import React, { Component } from 'react'

export default class Hairio extends Component {
    poista = () => {
        this.props.poista(this.props.lista.id)
    }
    render() {
        return (
            <tr style={list}>
                {/* <td>{this.props.lista.id}</td> */}
                <td>{this.props.lista.hairio}</td>
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