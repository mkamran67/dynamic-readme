const axios = require('axios');

// Get Porfile Pic and Email.
module.exports = async function getUserProfile(userName) {
  let res = {};
  await axios
    .get(`https://api.github.com/users/${userName}`)
    .then(({ data: { avatar_url } }) => {
      res = { avatar_url, isValid: true };
    })
    .catch((err) => {
      console.log(err.message);
      res = { avatar_url: false, isValid: false, message: err.message };
    });

  return res;
};
