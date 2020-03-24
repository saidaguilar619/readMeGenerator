const axios = require("axios");

const getAvatar = function (username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function(res) {
      return res.data.avatar_url;
    });
  }
;
console.log(getAvatar);
module.exports = getAvatar;