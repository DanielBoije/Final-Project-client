import React, { Component } from 'react';
import TuotteetLomakeTiedot from '../TuotteetLomakeTiedot';
import TuotteetPohja from '../TuotteetPohja';

class Lomakkeet extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h2>Johdon lomakkeet tähän</h2>
                <TuotteetPohja/>
            </div>
        );
    }
}

export default Lomakkeet;