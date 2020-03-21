// var appURL = "http://dannyboy.eba-uiqipt5d.eu-north-1.elasticbeanstalk.com/users"
var axios = require('axios');


function getData() {
       return  axios.get(appURL)
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


export {getData, addData, deleteData, updateData};