const express = require('express')
const router = express.Router()
const Enemy = require('../models/Enemies')
const { createEnemy } = require('../operations/enemies/createEnemy')
const { getAllEnemies } = require('../operations/enemies/getEnemies')

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  enemies = getAllEnemies()
  console.log("enemies",enemies)
  res.send(JSON.stringify(enemies))
})
// define the about route
router.get('/create', (req, res) => {
  let newEnemy = Enemy.build({ enemyType: 'Jane' })
  createEnemy(newEnemy)
  res.send({'sts' : `create new enemy ${newEnemy.enemyType}`})
})

module.exports = router