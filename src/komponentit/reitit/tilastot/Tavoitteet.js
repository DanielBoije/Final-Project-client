import React, { Component } from 'react';
import {Bar} from "react-chartjs-2"

// Tämä vain esimerkki bar chartista
// Tämä vain esimerkki bar chartista
// Tämä vain esimerkki bar chartista

class Tavoitteet extends Component {
    state = {
        chartData:{
            labels: ["Helsinki", "Turku", "Tampere"],
            datasets: [
                {
                    label: "Population",
                    data: [500000, 200000, 350000],
                    backgroundColor: ["blue", "green","red"]
                }
            ]
        }
    }
    render() {
        return (
            <div style={bar}>
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display:true,
                            text:"Tämä vain esimerkki oletusarvoilla",
                            fontSize:25
                        },
                        legend:{
                            position:"right"
                        },
                        scaleBeginAtZero: true
                                             
                    }}
            />
            </div>
        );
    }
}

const bar = {
    width:"800px",
    height:"400px"
}

export default Tavoitteet;