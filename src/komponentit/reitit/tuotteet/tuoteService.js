const appURL = "http://localhost:3000/api/tuotteet"
const axios = require('axios');


async function getTuotteet() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiTuote(tnro) {
    let res = await axios.get(`${appURL}/${tnro}`)
    return res.data;
}

async function addTuotteet(tuote) {
    await axios.post(`${appURL}`, tuote)
    .then(res => {
        console.dir(res);
        console.log(res.data);
        return res.data;
    });
 }

 export {addTuotteet, getTuotteet, getYksiTuote};