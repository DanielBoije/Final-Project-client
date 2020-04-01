var hairiotURL = "http://localhost:3000/api/hairiot"
const linjatURL = "http://localhost:3000/api/linjat"
var axios = require('axios');


function getHairio() {
       return  axios.get(hairiotURL)
}
function getLinjat() {
       return  axios.get(linjatURL)
}

export {getHairio, getLinjat};