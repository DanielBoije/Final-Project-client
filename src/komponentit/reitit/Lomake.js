import React, { Component } from 'react';
import LomakeTiedot from "./henkilöstölomake/LomakeTiedot"
import LomakeVahvistus from "./henkilöstölomake/LomakeVahvistus"
import LomakeLähetetty from "./henkilöstölomake/LomakeLahetetty"
import {addData} from "../../Service"


class Lomake extends Component {
    state = {
        step:1,
        pvm: "",
        vuoro: "",
        linja: "",
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
        console.log(päivä)
        this.setState({ pvm: päivä})
    }

    //lomakekentän muutokset
    handleChange = input => e => {
        console.log(e.target.value)
        console.log(e.target)
        this.setState({ [input]: e.target.value})
    }

    sendData = data => {    
        console.log(data)
        addData(data)
        // .then(res=>{this.importTopics();
        // })        
    }

    render() {
        const { step } = this.state;
        const { pvm, vuoro, linja, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti } = this.state
        const values = { step, pvm, vuoro, linja, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti }
        
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
                        laheta={this.sendData}
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