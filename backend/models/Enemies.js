const { Sequelize, DataTypes } = require("sequelize");

const sqlDebugLogging = () => {
  return process.env.LOGGER_LEVEL === "debug";
};

const sequelize = new Sequelize("sqlite:sqlite/enemies.list", {
  logging: sqlDebugLogging(),
});
const Enemy = sequelize.define("Enemy", {
  enemyType: DataTypes.STRING,
  hitPoints: DataTypes.INTEGER,
  hpScaling: DataTypes.STRING,
  damageDice: DataTypes.STRING,
});

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = Enemy;
