const Sequelize = require("sequelize");
const initModels = require("./init-models");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

// 시퀄라이즈 MySQL 연결 객체 생성
let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, config, {
  host: config.host,
  dialect: config.dialect,
});
// 연결 객체를 나중에 재사용하기 위함
const db = initModels(sequelize);

module.exports = db;
