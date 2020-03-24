import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton"
class LomakeLahetetty extends Component {
    render() {
        return (
            <div>
                <br></br><br></br><br></br><br></br><br></br>
                <h2> Lomake Lähetetty! </h2><br></br>
                <MuiThemeProvider>
                <NavLink to="/lista">
                <RaisedButton label="Katso kaikki" primary={true}/>
                </NavLink>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default LomakeLahetetty;