import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from '@material-ui/core/TextField';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import SimpleSelect from "./LinjaSelect"



export default class Pohjahaku extends Component {

    state = {
        linja: null,
        alkupvm: "2020-02-01",
        loppupvm: "2020-03-31"
    }
    
    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    continue = async (e) => {
        e.preventDefault();
        this.props.naytaKakku();
        // let check = await this.props.checkValues();
        // if (check) {
        //     this.props.nextStep();
        // } else {
        //     console.log("syöte virheellinen tai vastaava linja löytyy jo kannasta");
        // }
    }

    handleChange = async (e) => {
        // console.log(e.target.value)
        // console.log(this.props.linja)
        await this.setState({
            linja:e.target.value
        })
        console.log(this.state)
    }
    
    render() {
        // const { handleChange } = this.props; 
        // const { values, handleChange } = this.props;     

        return (            
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="Hae häiriötilastot" showMenuIconButton={false}/>
                    <div style={padding}>
                        <SimpleSelect
                            // values={values}
                            handleChange={this.handleChange}
                        />
                        {/* <br></br>
                        <p style={punainen}>
                            {values.virhe}
                        </p> */}
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
    padding: "70px",
    //height:"390px"
}

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
