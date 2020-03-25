const appURL = "http://localhost:3000/api"
const axios = require('axios');

async function addTuotteet(tuote) {
    await axios.post(`${appURL}/tuotteet`, tuote)
    .then(res => {
        console.dir(res);
        return res.data;
    });
 }

 export {addTuotteet};