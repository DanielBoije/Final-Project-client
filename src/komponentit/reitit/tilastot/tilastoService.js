var hairiotURL = "http://localhost:3000/api/hairiot"
var axios = require('axios');


function getHairio() {
       return  axios.get(hairiotURL)
}

export {getHairio};