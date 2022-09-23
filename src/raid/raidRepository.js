const db = require("../../database/index");
const raid = db.raid;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function readRaid() {
  const data = await raid.findOne({
    order: [["enterTime", "DESC"]],
  });
  return data;
}

async function readRaidById(id) {
  const data = await raid.findOne({
    where: { id: id },
  });
  return data;
}

async function createRaid(id, score, level) {
  const info = {
    id: id,
    score: score,
    level: level,
    status: "진행중",
    enterTime: new Date(),
  };
  const data = await raid.create(info);
  return data;
}
async function readTotalScoreByUserId(id) {
  const data = await raid.findAll({
    attributes: [[sequelize.fn("sum", sequelize.col("score")), "totalScore"]],
    where: { id: id },
    raw: true,
  });
  return data;
}
async function readRaidInfoByUserId(id) {
  const data = await raid.findAll({
    attributes: ["id", "canEnter", "score", "enterTime", "endTime"],
    where: { id: id },
    order: [["enterTime", "DESC"]],
  });
  return data;
}

async function updateRaid(raidId, canEnter) {
  const data = await raid.update(
    { canEnter: canEnter, endTime: new Date() },
    {
      where: { raidId: raidId },
    }
  );
  return data;
}
module.exports = {
  readRaid,
  createRaid,
  readTotalScoreByUserId,
  readRaidInfoByUserId,
  readRaidById,
  updateRaid,
};
