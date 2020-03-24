import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar"
import SimpleSelect from "./Select"


class LomakeTiedot extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

       
    render() {
        const { values, handleChange, handleDateChange } = this.props;
        // const selectedDate= new Date();
        
        return (            
            <MuiThemeProvider>
                
                <React.Fragment>
                    <div style={shadow}>
                    <AppBar title="Tuotanto" showMenuIconButton={false}/>
                    <div style={padding}>
                    <DatePicker 
                    hintText="Päivämäärä" 
                    // selected={selectedDate} 
                    onChange={handleDateChange} 
                    defaultValue={values.pvm}/>
                    <SimpleSelect 
                    values={values}
                    handleChange={handleChange}
                    /><br></br>
                    <TextField 
                    hintText="Testi" 
                    onChange={handleChange("viesti")}
                    defaultValue={values.viesti}/>
                    <br></br><br></br>
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



export default LomakeTiedot;

