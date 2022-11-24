const { Axios, default: axios } = require("axios");
const globalLogger = require("../helpers/globalLogger");

exports.loginUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let payLoad = {
    username: username,
  };
  let url = "/user/get";
  let config = {
    data: payLoad,
    method: "GET",
    baseURL: "https://yoms-api.herokuapp.com/",
  };
  axios
    .get(url, config)
    .then((response) => {
      let user = response.data;
      if (user.password == password) {
        let params = {};
        params.user = user;
        res.render("home", params);
      }
      else {
        res.status(403).send("Username or Password Incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.data);
    });
};
