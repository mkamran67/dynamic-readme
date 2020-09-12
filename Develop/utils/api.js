const api = {
  // Get Porfile Pic and Email.
  getUserProfile(userName) {
    let res = {};
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(({ avatar_url }) => {
        res = { avatar_url };
      })
      .catch((err) => console.log(err));

    return res;
  },
};

module.exports = api;
