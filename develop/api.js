  
const axios = require("axios");

const api = {
  getUser(username) {
    axios
    .get(`https://api.github.com/users/${username}`)
    .then(function(res) {
      console.log(res.data.avatar_url);
      console.log(res.email);
      
    });
  }
};

module.exports = api;