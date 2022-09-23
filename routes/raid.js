const express = require("express");
const raidController = require("../src/raid/raidController");

const router = express.Router();

router.get("/raid", raidController.readRaid); //레이드 상태 조회
router.post("/raid/enter", raidController.createRaid); //레이드 입장
router.patch("/raid/end", raidController.updateRaid); //레이드 종료 현재시간 구현중 9월 24일
// router.get("radid/enter",raidController.readRaidRank)//레이드 랭킹 조회 구현 예정 레디스를 이용하여 랭킹조회할 예정
module.exports = router;
