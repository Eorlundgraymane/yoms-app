const { Axios, default: axios } = require("axios");
const globalLogger = require("../helpers/globalLogger");

exports.loginUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (
    username != "" &&
    username != null &&
    password != "" &&
    password != null
  ) {
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
  } else {
    res.status(403).json("Username or Password cannot be empty!");
  }
};

exports.signUpUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  if (
    username != "" &&
    username != null &&
    password != "" &&
    password != null
  ) {
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
        if (err.response.status == 403) {
          console.log(err.response.data);
          console.log(err.response.status);
          res.status(403).json(err.response.data);
        } else {
          console.log(err.response.data);
          console.log(err.response.status);
          res.status(500).json(err.response.data);
        }
      });
  } else {
    res.status(403).json("Username or Password cannot be empty!");
  }
};
