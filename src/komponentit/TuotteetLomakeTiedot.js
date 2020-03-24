import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class TuotteetLomakeTiedot extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                    <h2>Tuotteet</h2>
                    <TextField 
                    type="number"
                    required
                    label="Tuotenumero (pakollinen tieto)"
                    InputLabelProps={{ shrink: true }}
                    hintText="Tuotenumero (pakollinen tieto)"
                    onChange={handleChange("tuotenro")}
                    defaultValue={values.tuotenro}/>
                    <br></br>
                    <TextField 
                    hintText="Uusi tuote" 
                    onChange={handleChange("tuotenimi")}
                    defaultValue={values.tuotenimi}/>
                    <br></br>
                    <TextField 
                    hintText="Tuntitavoite" 
                    onChange={handleChange("tuntitavoite")}
                    defaultValue={values.tuntitavoite}/>
                    <br></br>
                    <RaisedButton
                    label="Jatka"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 15
    }
}
