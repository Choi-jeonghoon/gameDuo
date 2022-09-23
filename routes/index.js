const express = require("express");
const userRouter = require("./user");
const raidRouter = require("./raid");

const router = express.Router();
router.use(userRouter);
router.use(raidRouter);

module.exports = router;
