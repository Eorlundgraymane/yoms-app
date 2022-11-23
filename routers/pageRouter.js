const express = require("express");
const router = express.Router();

//User Calls Routed to User Controller

const pageController = require("../controllers/pageController");

router.use("/", pageController.loginPage);

module.exports = router;
