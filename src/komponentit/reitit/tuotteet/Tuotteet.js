import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default class Tuotteet extends Component {
    poista = () => {
        this.props.poista(this.props.lista.tuotenro)
    }
    render() {
        return (
            <tr style={list}>
                <td>{this.props.lista.tuotenro}<br></br>
                {this.props.lista.tuotenimi}</td>
                <td>{this.props.lista.tuntitavoite}</td><br/><br/>
                {/* <td><button type="button">&#9998;</button></td> */}
                <td><Button size="small"  variant="contained" color="secondary" onClick={this.poista} startIcon={<DeleteIcon />}>Poista</Button> </td>
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