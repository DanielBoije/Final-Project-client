import React, { Component } from 'react';
//import TuotteetLomakeTiedot from './tuotteet/TuotteetLomakeTiedot';
import TuotteetPohja from './tuotteet/TuotteetPohja';
import LinjaPohja from './linjat/LinjaPohja';
import VuoroPohja from './tyovuorot/VuoroPohja';
import HairioPohja from './hairiot/HairioPohja';

class Lomakkeet extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h3>Pohjatiedot</h3>
                <VuoroPohja/>
                <LinjaPohja/>
                <TuotteetPohja/>
                <HairioPohja/>
            </div>
        );
    }
}

export default Lomakkeet;