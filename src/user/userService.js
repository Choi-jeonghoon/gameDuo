const userRepo = require("./userRepository");
const raidRepo = require("../raid/raidRepository");

async function createUser() {
  const data = await userRepo.createUser();
  return data;
}

async function readUserById(id) {
  const isExistedUser = await userRepo.readUserById(id);
  console.log(isExistedUser);
  if (!isExistedUser) {
    const error = new Error("존재하지 않는 유저입니다.");
    error.statusCode = 404;
    throw error;
  }
  const totalScore = await raidRepo.readTotalScoreByUserId(id);
  const raidInfo = await raidRepo.readRaidInfoByUserId(id);
  const data = { totalScore: totalScore[0].totalScore, raidInfo };
  return data;
}

module.exports = { createUser, readUserById };
