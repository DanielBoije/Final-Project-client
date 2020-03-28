import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton"
import { Paper } from '@material-ui/core';
import './Lomaketiedot.css'

class LomakeLahetetty extends Component {
    render() {
        return (
            <div className="lomakelahetetty">
                
                <br></br><br></br><br></br><br></br><br></br>
                <h2> Lomake Lähetetty! </h2>
                <br></br>
               
                <Paper>
                <MuiThemeProvider>
                    <NavLink to="/lista">
                        <RaisedButton label="Katso kaikki" primary={true} small={true} />
                    </NavLink>
                </MuiThemeProvider>
                </Paper>
            </div>
        );
    }
}

export default LomakeLahetetty;