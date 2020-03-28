var tyovuorotURL = "http://localhost:3000/api/tyovuorot"
var linjatURL = "http://localhost:3000/api/linjat"
var tuotteetURL = "http://localhost:3000/api/tuotteet"
var hairioURL = "http://localhost:3000/api/hairiot"
var toteumatURL = "http://localhost:3000/api/toteumat"
var axios = require('axios');

function getVuoro() {
       return  axios.get(tyovuorotURL)
}

function getLinja() {
    return  axios.get(linjatURL)
}

function getTuote() {
    return  axios.get(tuotteetURL)
}

function getHairio() {
    return  axios.get(hairioURL)
}

function addToteumat(nq) {
    console.log(nq)
    return axios.post(toteumatURL,nq)
}


export {getVuoro, getLinja, getTuote, getHairio, addToteumat};