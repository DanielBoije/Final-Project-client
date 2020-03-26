import React, { Component } from 'react'
import TuotteetLomakeTiedot from './TuotteetLomakeTiedot';
import TuotteetLomakeLahetetty from './TuotteetLomakeLahetetty';
import TuotteetLomakeVahvistus from './TuotteetLomakeVahvistus';
import { getYksiTuote } from './tuoteService';

export default class TuotteetPohja extends Component {
    
    state = {
        step:1,
        tuotenro: "",
        tuotenimi: "",
        tuntitavoite: "",
        virhe: "",
    }

    //syötteiden tarkastaminen ja virheen määritys


        

    checkValues = async () => {

        const tnro = this.state.tuotenro;
        const tnimi = this.state.tuotenimi;
        const tavoite = this.state.tuntitavoite;
        const kannantuotteet = await getYksiTuote(tnro)
        //annettua tuotenumeroa ei ole vielä tietokannassa
        if (kannantuotteet.length === 0) {
            if (tnro < 1 || isNaN(tnro) || tnro.match(/e/gi) || tnro === "") {
                this.setState({ virhe: "Tuotenumero puuttuu tai virheellinen" });
                return false;
            } else if (tnimi.length < 1 || tnimi.length > 50) {
                this.setState({ virhe: "Tuotenimi puuttuu, tai yli 50 merkkiä pitkä"})
                return false;
            } else if (tavoite < 0 || isNaN(tavoite) || tavoite.match(/e/gi) || tavoite === "") {
                this.setState({ virhe: "Tavoite puuttuu tai virheellinen" })
                return false;
            } else {
                return true;
            }
        } else {
            this.setState({ virhe: "Tuotenumero löytyy jo tietokannasta" })
            return false;
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
                        values={values}
                    />
                )
            case 3:
                return (
                    <TuotteetLomakeLahetetty/>
                )

                

            default:
                return (
                <TuotteetLomakeTiedot/>
                )
                    

        }
    }
}
