var tyovuorotURL = "http://localhost:3000/api/tyovuorot"
var linjatURL = "http://localhost:3000/api/linjat"
var tuotteetURL = "http://localhost:3000/api/tuotteet"
var appURL = "http://localhost:3000/api/toteuma"
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

function addData(nq) {
    console.log(nq)
    return axios.post(appURL,nq)
}

function deleteData(id) {
    console.log(id)
    return axios.delete(appURL+`${id}`)
}

function updateData(id) {
    console.log(id)
    return axios.put(appURL+`${id}`)
}


export {getVuoro, getLinja, getTuote, addData, deleteData, updateData};