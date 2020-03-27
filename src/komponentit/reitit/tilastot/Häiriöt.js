import React, { Component } from 'react';
import {Pie} from "react-chartjs-2"
import {getHairio} from "./Service"

class Häiriöt extends Component {
    constructor(){
        super();
        this.state = {
            chartData:[]
        }
    }
    
    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        getHairio().then(res => {
            console.log(res.data)
            this.setState({chartData: res.data})
            });
    }

    render() {
        var hairiot = this.state.chartData.map( b => b.hairio );
        console.log(hairiot)
        var hairiodata = {
            labels: hairiot,
            datasets: [
                {
                    label: "Häiriöt",
                    data: [1, 2, 3, 4], //nämä pitää muuttaa että päivittyvät automaattisesti kun lisätään uutta
                    backgroundColor: ["blue", "green","red","yellow"] //nämä pitää muuttaa että päivittyvät automaattisesti kun lisätään uutta
                }
            ]
        }
        console.log(hairiodata)
        return (
            <div style={bar}>
                <Pie
                    data= {hairiodata}
                    options={{
                        title: {
                            display:true,
                            text:"Häiriöt",
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            fontSize:25
                        }             
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

export default Häiriöt;