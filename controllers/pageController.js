const globalLogger = require("../helpers/globalLogger");

exports.loginPage = (req, res) => {
    console.log("Login Page");
    res.render('login');
};
