import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import AppBar from "material-ui/AppBar";
import HairioLista from './HairioLista';
//import { deleteHairio } from './hairioService';
//import { getHairiot } from './hairioService';
import RaisedButton from "material-ui/RaisedButton";


export default class HairioLomakeTiedot extends Component {

    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    continue = async (e) => {
        e.preventDefault();
        let check = await this.props.checkValues();
        if (check) {
            this.props.nextStep();
        } else {
            console.log("syöte virheellinen tai vastaava häiriö löytyy jo kannasta");
        }
    }
    
    render() {
        const { values, handleChange } = this.props;     

        return (           
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>

                {/* style={{ background: 'black' }} */}

                    <AppBar title="HÄIRIÖT" showMenuIconButton={false}/>
                    <div className="hairiocss">

                        <TextField 
                            type="text"
                            size="medium"
                            required
                            label="Häiriö" 
                            onChange={handleChange("hairio")}
                            defaultValue={values.hairio}
                        />
                        <br></br>
                        <p style={punainen}>
                            {values.virhe}
                        </p>
                        <br></br><br></br><br/>
                        <br/>
                        {/* <Button
                                variant="contained"
                                color="primary"
                                onClick={this.continue}
                                size="large"
                                // label="Jatka"
                                // default={true}
                                style={styles.button}>
                                   JATKA </Button> */}

                            <RaisedButton
                            label="JATKA"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}/>

                        <br></br>
                        
                        <HairioLista
                            lista={values.lista}
                            poista={this.props.poistaHairio}
                         />
                    </div>
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
// const padding = {
//     padding: "127px",
//     height:"583px"
// }

const shadow = {
    textAlign: "center",
    margin: "0px",
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
    fontStyle: "italic"
}
