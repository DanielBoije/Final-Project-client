var tyovuorotURL = "http://localhost:3000/api/tyovuorot"
var linjatURL = "http://localhost:3000/api/linjat"
var tuotteetURL = "http://localhost:3000/api/tuotteet"
// var appURL = "http://localhost:3000/api/toteuma"
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


export {getVuoro, getLinja, getTuote};