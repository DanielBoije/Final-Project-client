import React, { Component } from 'react';
import LomakeTiedot from "../LomakeTiedot"

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
                return <h1>LomakeVahvistus</h1>
            case 3:
                return <h1>LomakeLähetetty</h1>
        }
    }
}

export default Lomake;