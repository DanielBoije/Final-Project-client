import React, { Component } from 'react'
import Tuotteet from './Tuotteet';

export default class TuotteetLista extends Component {
    render() {
        let tulosta = this.props.lista.map((tuote) => {
            return (<Tuotteet lista={tuote} poista={this.props.poista} key={tuote.tuotenro}/>)
        })
        return (
                <table> 
                    <thead><td>tuote</td><td>tavoite</td></thead>
                        <tbody>{tulosta}</tbody>
                </table>
        )
    }
}