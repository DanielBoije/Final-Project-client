import React, { Component } from 'react'
import TuotteetLomakeTiedot from './TuotteetLomakeTiedot';
import TuotteetLomakeLahetetty from './TuotteetLomakeLahetetty';
import TuotteetLomakeVahvistus from './TuotteetLomakeVahvistus';

export default class TuotteetPohja extends Component {
    state = {
        step:1,
        tuotenro: "",
        tuotenimi: "",
        tuntitavoite: "",
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
        const { step } = this.state;
        const { tuotenro, tuotenimi, tuntitavoite } = this.state
        const values = { step, tuotenro, tuotenimi, tuntitavoite }

        
        switch(step) {
            case 1:
                return (
                    <TuotteetLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <TuotteetLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <TuotteetLomakeLahetetty/>
                )
        }
    }
}
