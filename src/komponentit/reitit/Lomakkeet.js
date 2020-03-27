import React, { Component } from 'react';
import TuotteetPohja from './tuotteet/TuotteetPohja';
import LinjaPohja from './linjat/LinjaPohja';
import './Lomakkeet.css';
import {Paper} from '@material-ui/core';


class Lomakkeet extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h3>Pohjatietoja</h3>
                <div className="test">
                    <Paper>
                <TuotteetPohja/>
                </Paper>
                <Paper>
                <LinjaPohja />
                </Paper>
                </div>
            </div>
        );
    }
}



export default Lomakkeet;