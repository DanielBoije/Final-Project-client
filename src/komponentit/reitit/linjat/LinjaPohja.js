import React, { Component } from 'react'
import LinjaLomakeTiedot from './LinjaLomakeTiedot';
import LinjaLomakeLahetetty from './LinjaLomakeLahetetty';
import LinjaLomakeVahvistus from './LinjaLomakeVahvistus';
import { getLinjat } from './linjaService';

export default class LinjaPohja extends Component {
    state = {
        step:1,
        nimi: "",
        virhe: "",
    }

    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const nimi = this.state.nimi.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanlinjat = await getLinjat()
        let eiloydy = true;
        for (let i = 0; i < kannanlinjat.length; i++) {
            if ( kannanlinjat[i].nimi === nimi) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (nimi.length < 1 || nimi.length > 50) {
                this.setState({ virhe: "Linjan nimi puuttuu, tai on yli 50 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Linjan nimi löytyy jo tietokannasta" })
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
        const { nimi, virhe } = this.state
        const values = { step, nimi, virhe }

        switch(step) {
            case 1:
                return (
                    <LinjaLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                    />
                )
            case 2:
                return (
                    <LinjaLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 3:
                return (
                    <LinjaLomakeLahetetty/>
                )
            default:
                return (
                <LinjaLomakeTiedot/>
                )
                    
        }
    }
}
