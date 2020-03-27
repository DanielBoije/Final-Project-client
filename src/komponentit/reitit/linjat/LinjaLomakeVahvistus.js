import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField"
import TextField from '@material-ui/core/TextField';
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
import { addLinja } from './linjaService';

export default class LinjaLomakeVahvistus extends Component {
    linja = {
        nimi: this.props.values.nimi
    }
    
    continue = e => {
        e.preventDefault();
        //lähetetään apiin
        let tallennettu = addLinja(this.linja);
        console.log(tallennettu);
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
                <div style={shadow}>
                   
                    <AppBar title="Linjat" showMenuIconButton={false}/>
                    <div style={padding}>
                        <TextField 
                            label="Linja" 
                            size="medium"
                            defaultValue={values.nimi}
                            InputProps={{ readOnly: true }}
                        />
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
                        </div>
                    </div>
               
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}



const padding = {
    padding: "20px 50px 50px 50px"
}

const shadow = {
    textAlign: "center",
    margin: "50px",
    borderRadius: "10px",
    width: "fit-content",
    height: "fit-content",
    display: "inline-block",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const styles = {
    button: {
        margin: 15
    }
}

