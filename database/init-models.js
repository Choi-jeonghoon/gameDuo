var DataTypes = require("sequelize").DataTypes;
var _raid = require("../src/raid/model/raid");
var _user = require("../src/user/model/user");

function initModels(sequelize) {
  var raid = _raid(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  raid.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(raid, { as: "raids", foreignKey: "user_id"});

  return {
    raid,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
