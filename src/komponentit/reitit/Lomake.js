import React, { Component } from 'react';
import LomakeTiedot from "../LomakeTiedot"
import LomakeVahvistus from "../LomakeVahvistus"
import LomakeLähetetty from "../LomakeLahetetty"

class Lomake extends Component {
    state = {
        step:1,
        pvm: "",
        vuoro: "",
        tuote: "",
        lisääHäiriö: "",
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

    //lomakekentän muutokset
    handleChange = input => e => {
        console.log(e.target.value)
        this.setState({ [input]: e.target.value})
    }

    render() {
        const { step, pvm, vuoro, tuote, lisääHäiriö, tehdytTunnit, viesti } = this.state;
        const values = { step, pvm, vuoro, tuote, lisääHäiriö, tehdytTunnit, viesti }
        
        switch(step) {
            case 1:
                return (
                    <LomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
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
        }
    }
}

export default Lomake;