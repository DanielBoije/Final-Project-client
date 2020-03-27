const appURL = "http://localhost:3000/api/hairiot"
const axios = require('axios');


async function getHairiot() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiHairio(id) {
    let res = await axios.get(`${appURL}/${id}`)
    return res.data;
}

async function addHairio(nimi) {
    await axios.post(`${appURL}`, nimi)
    .then(res => {
        console.dir(res);
        console.log(res.data);
        return res.data;
    });
 }

 export {addHairio, getYksiHairio, getHairiot};