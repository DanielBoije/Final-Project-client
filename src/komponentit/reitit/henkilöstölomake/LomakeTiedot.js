import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar"
import SimpleSelect from "./Select"
import LisääHäiriö from "./LisaaHairio"
import { Paper } from '@material-ui/core';
import './Lomaketiedot.css'



class LomakeTiedot extends Component {

    state = {
        modalShow: false,
        vahvistettu: {
            pvm:"",
            vuoro_id:"",
            tuotenro:"",
            linja_id:""
        }
        
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    showModal = async () => {
        await this.setState({ 
        modalShow: true,
        vahvistettu: {
            pvm:this.props.values.pvm,
            vuoro_id:this.props.values.vuoro,
            tuotenro:this.props.values.tuote,
            linja_id:this.props.values.linja
            }
        })
        console.log(this.state.vahvistettu)
        this.props.laheta(this.state.vahvistettu);    //lähetetään apiin   
    }

    render() {
        const { values, handleChange, handleDateChange } = this.props;
        let modalClose = () => {
            this.setState({ modalShow: false })
        }
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <div className="testi">
                        <div className="testi2">
                            <Paper>
                                <div style={shadow}>
                                    <AppBar title="Tuotanto" showMenuIconButton={false} />
                                    <div style={padding}>
                                        <DatePicker
                                            hintText="Päivämäärä"
                                            // selected={selectedDate} 
                                            onChange={handleDateChange}
                                        // defaultValue={values.pvm}
                                        />
                                        <SimpleSelect
                                            values={values}
                                            handleChange={handleChange}
                                        /><br></br>
                                        <RaisedButton style={häiriö} label="Lisää häiriö" onClick={this.showModal}></RaisedButton>
                                        <LisääHäiriö
                                            values={values}
                                            handleChange={handleChange}
                                            show={this.state.modalShow}
                                            onHide={modalClose}
                                        /><br></br>
                                        <TextField
                                            type="number"
                                            min="0"
                                            step="0.5"
                                            required
                                            hintText="Tehdyt tunnit (0,5 = 30min)"
                                            onChange={handleChange("tehdytTunnit")}
                                            defaultValue={values.tehdytTunnit}
                                        /><br></br>
                                        <TextField
                                            type="number"
                                            min="0"
                                            step="1"
                                            required
                                            hintText="Tehdyt kappaleet"
                                            onChange={handleChange("tehdytKappaleet")}
                                            defaultValue={values.tehdytKappaleet}
                                        /><br></br>
                                        <TextField
                                            hintText="Viesti"
                                            onChange={handleChange("viesti")}
                                            defaultValue={values.viesti} />
                                        <br></br><br></br>
                                        <RaisedButton
                                            label="Jatka"
                                            primary={true}
                                            style={styles.button}
                                            onClick={this.continue}
                                        />

                                    </div>
                                </div>
                            </Paper> 
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>

        );
    }
}

const häiriö = {
    opacity: "50%"
}

const padding = {
    padding: "10px",
    width:"400px"
}

const shadow = {
    textAlign: "center",
    margin: "0px",
    borderRadius: "10px",
    width: "fit-content",
    height: "fit-content",
    display: "inline-block",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",


}

const styles = {
    button: {
        margin: 15
    }
}



export default LomakeTiedot;

