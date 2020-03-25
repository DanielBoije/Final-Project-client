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
        virhe: "",
    }

    //syötteiden tarkastaminen ja virheen määritys
    checkValues = () => {
        const tnro = this.state.tuotenro;
        const tnimi = this.state.tuotenimi;
        const tavoite = this.state.tuntitavoite;
        if (tnro < 1 || isNaN(tnro) || tnro.match(/e/gi) || tnro === "") {
            this.setState({ virhe: "Tuotenumero puuttuu tai virheellinen" });
            return false;
        } else if (tnimi.length < 1) {
            this.setState({ virhe: "Tuotenimi puuttuu"})
            return false;
        } else if (tavoite < 0 || isNaN(tavoite) || tavoite.match(/e/gi) || tavoite === "") {
            this.setState({ virhe: "Tavoite puuttuu tai virheellinen" })
            return false;
        } else {
            return true;
        }
    }

    //seuraava steppi
    nextStep = () => {
        this.setState({ virhe: "" })
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
        const { tuotenro, tuotenimi, tuntitavoite, virhe } = this.state
        const values = { step, tuotenro, tuotenimi, tuntitavoite, virhe }

        
        switch(step) {
            case 1:
                return (
                    <TuotteetLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                    />
                )
            case 2:
                return (
                    <TuotteetLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        //handleChange={this.handleChange}
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
