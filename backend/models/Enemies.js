const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite:enemies.list');
const Enemy = sequelize.define('Enemy', {
    enemyType: DataTypes.STRING,
    hitPoints: DataTypes.INTEGER,
});

(async () => {
    await sequelize.sync();
    // Code here
  })();

module.exports = Enemy