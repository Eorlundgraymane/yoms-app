const globalLogger = require("../helpers/globalLogger");

exports.loginPage = (req, res) => {
    console.log("Login Page");
    let params = {};    
    res.render('login',params);
};
