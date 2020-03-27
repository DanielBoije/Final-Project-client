import React, { Component } from 'react'
import HairioLomakeTiedot from './HairioLomakeTiedot';
import HairioLomakeLahetetty from './HairioLomakeLahetetty';
import HairioLomakeVahvistus from './HairioLomakeVahvistus';
import { getHairiot } from './hairioService';

export default class HairioPohja extends Component {
    state = {
        step:1,
        hairio: "",
        virhe: "",
    }

    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const hairio = this.state.hairio.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanhairiot = await getHairiot()
        let eiloydy = true;
        for (let i = 0; i < kannanhairiot.length; i++) {
            if (kannanhairiot[i].hairio.toLowerCase() === hairio.toLowerCase()) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (hairio.length < 1 || hairio.length > 50) {
                this.setState({ virhe: "Häiriö puuttuu, tai on yli 50 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Häiriö löytyy jo tietokannasta" })
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
        const { hairio, virhe } = this.state
        const values = { step, hairio, virhe }

        switch(step) {
            case 1:
                return (
                    <HairioLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                    />
                )
            case 2:
                return (
                    <HairioLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 3:
                return (
                    <HairioLomakeLahetetty/>
                )
            default:
                return (
                    <HairioLomakeTiedot/>
                )        
        }
    }
}
