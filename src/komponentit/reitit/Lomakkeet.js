import React, { Component } from 'react';
//import TuotteetLomakeTiedot from './tuotteet/TuotteetLomakeTiedot';
import TuotteetPohja from './tuotteet/TuotteetPohja';

class Lomakkeet extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h3>Pohjatietoja</h3>
                <TuotteetPohja/>
            </div>
        );
    }
}

export default Lomakkeet;