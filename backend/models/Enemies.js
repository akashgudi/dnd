const { Sequelize, DataTypes } = require('sequelize');

const sqlDebugLogging = () => {
  return (process.env.LOGGER_LEVEL === "debug")
}

const sequelize = new Sequelize('sqlite:enemies.list', {
  logging: sqlDebugLogging()
});
const Enemy = sequelize.define('Enemy', {
  enemyType: DataTypes.STRING,
  hitPoints: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = Enemy