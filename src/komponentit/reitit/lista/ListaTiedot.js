import React, { Component } from 'react';
import {getData} from "./listaService"
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
                <td key={b.id} value={b.id}>{b.pvm}</td>
                <td key={b.id} value={b.id}>{b.vuoro_id}</td>
                <td key={b.id} value={b.id}>{b.tuotenro}</td>
                <td key={b.id} value={b.id}>{b.tehtytunnit}</td>
                <td key={b.id} value={b.id}>{b.tehdytkappaleet}</td>
                <td key={b.id} value={b.id}>{b.viesti}</td>
                <td key={b.id} value={b.id}>{b.linja_id}</td>
            </tr>) ;
            })
        return (
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <table>
                    <tr>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                        <th>Jotain</th>
                    </tr>
                        {lista}                    
                </table>
            </div>
        );
    }
}

export default ListaPohja;