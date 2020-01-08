const express = require('express')

const cors = require('cors')

const APP_PORT = 3001

require('./models/userModel')

let mongoose = require('mongoose'),
  routes = require('./routes/routes'),
  bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/DEV')

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to db')
})

const app = express()

app.use(express.static('../../build'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

routes(app)

app.listen(APP_PORT, () =>
  console.log(`🚀 Server is listening on port ${APP_PORT}.`)
)

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` })
})
