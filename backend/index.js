const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')
const app = express()
const port = 3000
const db = new sqlite3.Database('enemies.list');
const enemies = require('./routes/enemies')

app.use(cors())
app.use(express.json())
app.use("/enemies", enemies)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})