import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar"
import { Paper } from '@material-ui/core';
import './Lomaketiedot.css'

class LomakeVahvistus extends Component {
    continue = e => {
        e.preventDefault();
        this.props.laheta(this.props.values);    //lähetetään apiin    
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

                    <div className="vahvistus">
                        <Paper>
                            <div style={shadow}>
                                <AppBar title="Tuotanto" showMenuIconButton={false} />
                                <div style={padding}>
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
                                            primaryText="Häiriön kesto"
                                            secondaryText={values.häiriönKesto + " tuntia"}
                                        />
                                        <ListItem
                                            primaryText="Tehdyt tunnit"
                                            secondaryText={values.tehdytTunnit + " tuntia"}
                                        />
                                        <ListItem
                                            primaryText="Viesti"
                                            secondaryText={values.viesti}
                                        />
                                    </List>
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
                        </Paper>

                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const padding = {
    padding: "30px"
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



export default LomakeVahvistus;
