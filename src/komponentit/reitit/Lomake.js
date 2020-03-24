import React, { Component } from 'react';
import LomakeTiedot from "./henkilöstölomake/LomakeTiedot"
import LomakeVahvistus from "./henkilöstölomake/LomakeVahvistus"
import LomakeLähetetty from "./henkilöstölomake/LomakeLahetetty"

class Lomake extends Component {
    state = {
        step:1,
        pvm: "",
        vuoro: "",
        tuote: "",
        lisääHäiriö: "",
        häiriönKesto: "",
        tehdytTunnit: "",
        viesti:"",
    }

    //seuraava steppi
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //edellinen steppi
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //päivämäärän muutokset
    handleDateChange = (event, date) => {
        console.log(date)
        let päivä = date.toString()
        päivä = päivä.slice(4,16)
        // let alkuperainen = JSON.stringify(date);
        // let dateStr = Date.parse(alkuperainen)
        // let pv = Date.prototype.getUTCDate(dateStr);
        //let xx = date.getUTCDate()
        
        // päivä = päivä.slice(1,11)
        console.log(päivä)
        this.setState({ pvm: päivä})
    }

    //lomakekentän muutokset
    handleChange = input => e => {
        console.log(e.target.value)
        this.setState({ [input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { pvm, vuoro, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti } = this.state
        const values = { step, pvm, vuoro, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti }
        
        switch(step) {
            case 1:
                return (
                    <LomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleDateChange={this.handleDateChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <LomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 3:
                return (
                    <LomakeLähetetty/>
                )
            default: 
        }
    }
}

export default Lomake;