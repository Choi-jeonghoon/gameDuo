const express = require("express");
const userController = require("../src/user/userController");

const router = express.Router();

router.post("/user", userController.createUser); //유저 생성
router.get("/user/:id", userController.readUserById); //유저 조회

module.exports = router;
