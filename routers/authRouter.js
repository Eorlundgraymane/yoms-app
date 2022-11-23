const express = require("express");
const router = express.Router();

//User Calls Routed to User Controller

const authController = require('../controllers/authController');

router.post("/signup", (req, res, next) => {
  res.status(200).send("Yoms API Server is Online!");
});
router.post("/login", authController.loginUser);

router.post("/logout", (req, res, next) => {
  res.status(200).send("Yoms API Server is Online!");
});

module.exports = router;
