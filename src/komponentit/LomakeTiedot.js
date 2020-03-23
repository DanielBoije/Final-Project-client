import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField"
import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton"

class LomakeTiedot extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange, handleDateChange } = this.props;
        const selectedDate= new Date();
        
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                    <br></br>
                    <DatePicker 
                    hintText="Päivämäärä" 
                    selected={selectedDate} 
                    onChange={handleDateChange} 
                    defaultValue={values.pvm}/>
                    <TextField 
                    hintText="Testi" 
                    onChange={handleChange("viesti")}/>
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



export default LomakeTiedot;
