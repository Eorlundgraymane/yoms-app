const express = require("express");
const router = express.Router();

const pageRouter = require('./pageRouter')
const authRouter = require("./authRouter");


router.use("/auth", authRouter);
router.use("/", pageRouter);

module.exports = router;
