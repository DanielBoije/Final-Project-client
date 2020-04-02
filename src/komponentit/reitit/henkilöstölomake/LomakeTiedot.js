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
import Button from '@material-ui/core/Button';




class LomakeTiedot extends Component {

    state = {
        modalShow: false,
        virhe: ""
        // vahvistettu: {
        //     pvm:"",
        //     vuoro_id:"",
        //     tuotenro:"",
        //     linja_id:""
        // }        
    }


    continue = e => {

        if (this.props.values.pvm && this.props.values.vuoro && 
            this.props.values.tuote && this.props.values.linja &&
            this.props.values.tehdytTunnit && this.props.values.tehdytKappaleet) {
        e.preventDefault();
        console.log("kaikki ok")
        this.props.nextStep();

        } else {
            e.preventDefault();
            this.setState({ virhe: "Tarkista pakolliset kentät" })
            console.log("tarkista")
            console.log(this.props.values)
        }
    }

    showModal = async () => {
        await this.setState({
            modalShow: true,
            // vahvistettu: {
            //     pvm:this.props.values.pvm,
            //     vuoro_id:this.props.values.vuoro,
            //     tuotenro:this.props.values.tuote,
            //     linja_id:this.props.values.linja
            //     }
            // })
            // console.log(this.state.vahvistettu)
            // this.props.laheta(this.state.vahvistettu);    //lähetetään apiin   
        })
    }

    message = ""; //muuttuu modalClose funktiossa

    render() {
        const { values, handleChange, handleDateChange } = this.props;

        let modalClose = () => {
            this.setState({ modalShow: false })
            if (values.lisääHäiriö && values.häiriönKesto) { this.message = <i>Häiriö lisätty</i> }
        }
        return (

            <MuiThemeProvider>
                <React.Fragment>
                    <div className="testi">
                        <div className="testi2">
                            <Paper>
                                <div style={shadow}>

                                {/* style={{ background:'#bdbdbd'}} */}

                                    <AppBar  title="TUOTANTO" showMenuIconButton={false} />
                                    <div style={padding}>
                                        <DatePicker
                                            hintText="Päivämäärä*"
                                            // selected={selectedDate} 
                                            onChange={handleDateChange}
                                        // defaultValue={values.pvm}
                                        />
                                        <SimpleSelect
                                            values={values}
                                            handleChange={handleChange}
                                        />
                                        {this.message}<br></br>
                                        {/* <RaisedButton style={häiriö} label="Lisää häiriö" onClick={this.showModal}></RaisedButton> */}

                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={this.showModal}
                                            size="medium"
                                            opacity="0.5"
                                            // style={styles.button}
                                           > LISÄÄ HÄIRIÖ
                                        </Button>

                                        <LisääHäiriö
                                            values={values}
                                            handleChange={handleChange}
                                            show={this.state.modalShow}
                                            onHide={modalClose}
                                        /><br></br>
                                        <TextField
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            required
                                            hintText="Tehdyt tunnit* (0,1 = 6min)"
                                            onChange={handleChange("tehdytTunnit")}
                                            defaultValue={values.tehdytTunnit}
                                        /><br></br>
                                        <TextField
                                            type="number"
                                            min="0"
                                            step="1"
                                            required
                                            hintText="Tehdyt kappaleet*"
                                            onChange={handleChange("tehdytKappaleet")}
                                            defaultValue={values.tehdytKappaleet}
                                        /><br></br>
                                        <TextField
                                            hintText="Viesti"
                                            onChange={handleChange("viesti")}
                                            defaultValue={values.viesti} />
                                        <br></br>
                                        <i style={punainen}>{this.state.virhe}</i>
                                        <br></br>
                                        {/* <Button
                                            variant="contained"
                                            color="default"
                                            onClick={this.continue}
                                            size="large"
                                           > JATKA
                                        </Button> */}

                            <RaisedButton
                            label="JATKA"
                            primary={true}
                            onClick={this.continue}/>

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

const punainen = {
    color: "red"
}

const häiriö = {
    opacity: "60%",
    // background:"black"
}

const padding = {
    padding: "0px",
    width: "400px",
    height: "550px"
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

// const styles = {
//     button: {
//         margin-top: 0,


//     }




export default LomakeTiedot;

