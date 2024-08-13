const express = require('express')
const router = express.Router()
const Enemy = require('../models/Enemies')
const { createEnemy } = require('../operations/enemies/createEnemy')
const { getAllEnemies } = require('../operations/enemies/getEnemies')
const stringAndParse = require('../helpers/stringAndParse')

// middleware that is specific to this router
const timeLog = (_req, _res, next) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog)

// define the home page route
router.get('/', (_req, res) => {
  getAllEnemies().then(enemies => {
    console.log("enemies", enemies)
    res.send({ enemies: stringAndParse(enemies) })
  })
})
// define the about route
router.get('/create', (_req, res) => {
  let newEnemy = Enemy.build({ enemyType: 'Jane' })
  createEnemy(newEnemy).then(() => res.send({ 'sts': `create new enemy ${newEnemy.enemyType}` })
  )
})

module.exports = router