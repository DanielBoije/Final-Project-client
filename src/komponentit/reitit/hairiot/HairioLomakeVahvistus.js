import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField"
import TextField from '@material-ui/core/TextField';
import AppBar from "material-ui/AppBar"
// import RaisedButton from "material-ui/RaisedButton"
import { addHairio } from './hairioService';
import HairioLista from './HairioLista';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

export default class HairioLomakeVahvistus extends Component {
    hairio = {
        hairio: this.props.values.hairio
    }
    
    continue = async(e) => {
        e.preventDefault();
        //lähetetään apiin
        let tallennettu = await addHairio(this.hairio);
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
                    <AppBar style={{ background: 'black' }} title="HÄIRIÖT" showMenuIconButton={false}/>
                    <div className="vahhairiocss">
                        <TextField 
                            label="Häiriö" 
                            size="medium"
                            defaultValue={values.hairio}
                            InputProps={{ readOnly: true }}
                        />
                            <br></br> <br></br> <br></br>
                            <br></br><br></br>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={this.back}
                                size="medium"
                                style={styles.button}>
                                TAKAISIN
                            </Button>
                         
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                onClick={this.continue}
                                startIcon={<SaveIcon />}>
                                TALLENNA
                            </Button>
                        <HairioLista
                            lista={values.lista}
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
//     height: "595px"
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

