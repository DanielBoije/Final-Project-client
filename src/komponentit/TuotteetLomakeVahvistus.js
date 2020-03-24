import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

export default class TuotteetLomakeVahvistus extends Component {
    continue = e => {
        e.preventDefault();
        //lähetetään apiin
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values } = this.props;
        
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>

                    <TextField 
                        hintText="Tuotenumero" 
                        
                        //onChange={handleChange("tuotenro")}
                        defaultValue={values.tuotenro}/>
                        <br></br>
                    <TextField 
                        hintText="Tuotteen nimi" 
                        //onChange={handleChange("tuotenimi")}
                        defaultValue={values.tuotenimi}/>
                        <br></br>
                    <TextField 
                        hintText="Tuntitavoite kpl/tunti" 
                        //onChange={handleChange("tuntitavoite")}
                        defaultValue={values.tuntitavoite}/>
                    <br></br>
                    <RaisedButton
                        label="Takaisin"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Vahvista"
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

