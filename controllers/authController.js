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
    // baseURL: "http://localhost:3001/",
  };
  axios
    .get(url, config)
    .then((response) => {
      let user = response.data;
      if (user.password == password) {
        let params = {};
        params.user = user;
        res.send("Welcome " + user.username + "!");
        // res.render("home", params);
      } else {
        res.status(403).send("Username or Password Incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data);
      if (err.status == 403) {
        res.status(403).send("Username or Password Incorrect");
      } else {
        res.status(500).send(err.response.data);
      }
    });
};

exports.signUpUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let payLoad = {
    username: username,
    password: password,
  };
  let url = "/user/create";
  let config = {
    method: "POST",
    baseURL: "https://yoms-api.herokuapp.com/",
    // baseURL: "http://localhost:3001/",
  };
  axios
    .post(url, payLoad, config)
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      if (err.status == 403) {
        res.status(403).send(err.data);
      } else {
        res.status(500).send(err.data);
      }
    });
};
