import React, { Component } from 'react'
import VuoroLomakeTiedot from './VuoroLomakeTiedot';
import VuoroLomakeLahetetty from './VuoroLomakeLahetetty';
import VuoroLomakeVahvistus from './VuoroLomakeVahvistus';
import { getVuorot } from './vuoroService';

export default class VuoroPohja extends Component {
    state = {
        step:1,
        tyovuoro: "",
        virhe: "",
    }

    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const tyovuoro = this.state.tyovuoro.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanvuorot = await getVuorot()
        let eiloydy = true;
        for (let i = 0; i < kannanvuorot.length; i++) {
            if (kannanvuorot[i].tyovuoro.toLowerCase() === tyovuoro.toLowerCase()) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (tyovuoro.length < 1 || tyovuoro.length > 5) {
                this.setState({ virhe: "Vuoron nimi puuttuu, tai on yli 5 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Vuoron nimi löytyy jo tietokannasta" })
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
        const { tyovuoro, virhe } = this.state
        const values = { step, tyovuoro, virhe }

        switch(step) {
            case 1:
                return (
                    <VuoroLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                    />
                )
            case 2:
                return (
                    <VuoroLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 3:
                return (
                    <VuoroLomakeLahetetty/>
                )
            default:
                return (
                    <VuoroLomakeTiedot/>
                )        
        }
    }
}
