import React, { Component } from 'react';
import {getData} from "./listaService"
import moment from "moment"
class ListaPohja extends Component {

    state = {
        Data:[]
    }
    
    componentDidMount=()=>{
        this.importData();        
     }
     importData=()=>{
         getData().then( async res => {
             console.log(res.data)
             await this.setState({Data:res.data})
             console.log(this.state)
           });
     }

    render() {
        var lista = this.state.Data.map( b => {
            return ( 
            <tr>
                <td key={b.id} value={b.id}>{b.id}</td>
                <td key={b.id} value={b.id}>{moment(b.pvm).format('DD/MM/YYYY')}</td>
                <td key={b.id} value={b.id}>{b.nimi}</td>
                <td key={b.id} value={b.id}>{b.tyovuoro}</td>
                <td key={b.id} value={b.id}>{b.tuotenimi}</td>
            </tr>) ;
            })
        return (
            <div style={taulukko}>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Päivämäärä</th>
                        <th>Linja</th>
                        <th>Työvuoro</th>
                        <th>Tuotteen nimi</th>
                    </tr>
                        {lista}                    
                </table>
            </div>
        );
    }
}

const taulukko = {
    margin: "100px",
    display: 'flex', 
    justifyContent: 'center'
}
export default ListaPohja;