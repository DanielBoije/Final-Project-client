import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from '@material-ui/core/TextField';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";



export default class TuotteetLomakeTiedot extends Component {
    

    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    continue = e => {
        e.preventDefault();
        let check = this.props.checkValues();
        if (check) {
            this.props.nextStep();
        } else {
            console.log("syöte virheellinen");
        }
    }
    
    render() {
        const { values, handleChange } = this.props;     

        return (            
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="Tuotteet" showMenuIconButton={false}/>
                    <div style={padding}>

                        <TextField 
                            type="number"
                            size="medium"
                            required
                            label="Tuotenumero"
                            onChange={handleChange("tuotenro")}
                            defaultValue={values.tuotenro}
                        />
                        <br></br>
                        <TextField 
                            type="text"
                            size="medium"
                            required
                            label="Tuotenimi" 
                            onChange={handleChange("tuotenimi")}
                            defaultValue={values.tuotenimi}
                        />
                        <br></br>
                        <TextField 
                            type="number"
                            size="medium"
                            required
                            label="Tuntitavoite" 
                            onChange={handleChange("tuntitavoite")}
                            defaultValue={values.tuntitavoite}
                        />
                        <br></br>
                        <p style={punainen}>
                            {values.virhe}
                        </p>
                        <br></br>
                        <RaisedButton
                            label="Jatka"
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
    padding: "50px"
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

const punainen = {
    color: "red",
}
