const Enemy = require("../../models/Enemies")
getAllEnemies = async () => {
    let enemies = await Enemy.findAll({})
    return enemies
}

module.exports = { getAllEnemies }