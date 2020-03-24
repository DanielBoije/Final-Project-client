import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {List, ListItem} from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"

class LomakeVahvistus extends Component {
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
                    <List>
                        <ListItem
                            primaryText="Päivämäärä"
                            secondaryText={values.pvm}
                        />
                        <ListItem
                            primaryText="Vuoro"
                            secondaryText={values.vuoro}
                        />
                        <ListItem
                            primaryText="Tuote"
                            secondaryText={values.tuote}
                        />
                        <ListItem
                            primaryText="Häiriö"
                            secondaryText={values.lisääHäiriö}
                        />
                        <ListItem
                            primaryText="Tehdyt tunnit"
                            secondaryText={values.tehdytTunnit}
                        />
                        <ListItem
                            primaryText="Viesti"
                            secondaryText={values.viesti}
                        />
                    </List><br></br>
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



export default LomakeVahvistus;
