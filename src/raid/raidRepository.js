const db = require("../../database/index");
const raid = db.raid;
const sequelize = require("sequelize");
const Op = sequelize.Op;

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

module.exports = {
  readTotalScoreByUserId,
  readRaidInfoByUserId,
};
