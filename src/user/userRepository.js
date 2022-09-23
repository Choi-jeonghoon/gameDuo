const db = require("../../database/index");
const user = db.user;
const sequelize = require("sequelize");
const Op = sequelize.Op;

async function createUser() {
  const data = await user.create();
  return data;
}

async function readUserById(id) {
  const data = await user.findOne({
    where: { id: id },
  });
  return data;
}

module.exports = {
  createUser,
  readUserById,
};
