const axios = require("axios");
const nodeCache = require("node-cache");
const myCache = new nodeCache({ stdTTL: 0, checkperiod: 600 });
const raidService = require("./raidService");

async function readRaid(req, res) {
  let bossRaids;
  try {
    if (myCache.has("bossRaids")) {
      bossRaids = myCache.get("bossRaids");
    } else {
      let data;
      const url_for_info =
        "https://dmpilf5svl7rv.cloudfront.net/assignment/backend/bossRaidData.json";

      await axios.get(url_for_info).then(function (response) {
        myCache.set("bossRaids", response.data.bossRaids);
      });
      bossRaids = myCache.get("bossRaids");
    }

    const data = await raidService.readRaid(bossRaids[0]);
    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}
async function createRaid(req, res) {
  try {
    const id = req.body.id;
    const level = req.body.level;
    let bossRaids;
    if (myCache.has("bossRaids")) {
      bossRaids = myCache.get("bossRaids");
    } else {
      let data;
      const url_for_info =
        "https://dmpilf5svl7rv.cloudfront.net/assignment/backend/bossRaidData.json";

      await axios.get(url_for_info).then(function (response) {
        myCache.set("bossRaids", response.data.bossRaids);
      });
      bossRaids = myCache.get("bossRaids");
    }
    const data = await raidService.createRaid(id, level, bossRaids[0]);
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function updateRaid(req, res) {
  try {
    const id = req.body.id;
    const raidId = req.body.raidId;
    let bossRaids;
    if (myCache.has("bossRaids")) {
      bossRaids = myCache.get("bossRaids");
    } else {
      let data;
      const url_for_info =
        "https://dmpilf5svl7rv.cloudfront.net/assignment/backend/bossRaidData.json";

      await axios.get(url_for_info).then(function (response) {
        myCache.set("bossRaids", response.data.bossRaids);
      });
      bossRaids = myCache.get("bossRaids");
    }
    const data = await raidService.updateRaid(id, raidId, bossRaids[0]);
    return res.status(200).send({ message: "보스레이드 종료" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { readRaid, createRaid, updateRaid };
