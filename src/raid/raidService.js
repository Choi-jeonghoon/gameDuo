const raidRepo = require("./raidRepository");

async function readRaid(raid) {
  const raidLimitSeconds = raid.raidLimitSeconds;
  const latestHistory = await raidRepo.readRaid();
  let canEnter;
  let enteredUserId;
  if (latestHistory == null || latestHistory.status == "성공" || latestHistory.status == "실패") {
    canEnter = true;
  } else {
    //enterTime 확인
    const nowTime = new Date();
    if (nowTime - latestHistory.enterTime > raidLimitSeconds * 1000) {
      //입장 가능
      canEnter = true;
    } else {
      //입장 불가능
      canEnter = false;
      enteredUserId = latestHistory.userId;
    }
  }
  const data = { canEnter, enteredUserId };
  return data;
}

async function createRaid(id, level, bossRaids) {
  //조회하고 입장가능 여부 확인
  const { canEnter } = await readRaid(bossRaids);
  const isEntered = canEnter;
  let raidRecordId;
  if (isEntered) {
    const isEqualLevel = (element) => element.level == level;
    const idx = bossRaids.levels.findIndex(isEqualLevel);
    if (idx == -1) {
      const error = new Error("존재하지 않는 raidLevel 입니다.");
      error.statusCode = 404;
      throw error;
    }
    const score = bossRaids.levels[idx].score; // level에 해당하는 score 값
    const result = await raidRepo.createRaid(id, score, level);
    raidRecordId = result.raidRecordId;
  }

  const data = { isEntered, raidRecordId };
  return data;
}

async function updateRaid(id, id, bossRaids) {
  //현재시간이랑 비교 후 성공 및 실패 확인
  const RaidInfo = await raidRepo.readRaidById(id);
  const enterTime = RaidInfo.enterTime;
  if (id !== RaidInfo.userId) {
    const error = new Error("저장된 userId 와 raidId 의 정보가 일치하지 않습니다.");
    error.statusCode = 404;
    throw error;
  }
  const nowTime = new Date();
  if (nowTime - enterTime > bossRaids.bossRaidLimitSeconds * 1000) {
    //시작 3분 초과 시 실패
    const data = await raidRepo.updateRaid(raidId, "실패");
    return data;
  } else {
    //3분 이하 종료 시 성공
    const data = await raidRepo.updateRaid(raidId, "성공");

    return data;
  }
}
module.exports = { readRaid, createRaid, updateRaid };
