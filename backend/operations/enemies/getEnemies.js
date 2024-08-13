const Enemy = require("../../models/Enemies")
getAllEnemies = async () => {
    let enemies = await Enemy.findAll({})
    console.log("created enemy", enemies)
    return enemies
}

module.exports = { getAllEnemies }