const mongoose = require('mongoose')

const User = mongoose.model('Users')

const bcrypt = require('bcrypt')

const salt = bcrypt.genSalt(12)

/* const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch"); */

exports.listAllUsers = function(req, res) {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.createAUser = function(req, res) {
  let newUser = new User(req.body)
  bcrypt.hash(req.body.password, 12, function(err, hash) {
    newUser.password = hash

    newUser.save((err, user) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
  })
}

exports.deleteUser = function(req, res) {
  User.remove(
    {
      username: req.params.username
    },
    err => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'User successfully deleted' })
    }
  )
}

exports.logIn = function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      text: 'Requête invalide'
    })
  } else {
    User.findOne(
      {
        email: req.body.email
      },
      (err, user) => {
        if (err) {
          res.status(500).json({
            text: 'Erreur interne'
          })
        } else if (!user) {
          res.status(401).json({
            text: 'Authentification failed'
          })
        } else if (user.authenticate(req.body.password)) {
          res.status(200).json({
            text: 'Authentification'
          })
          /* localStorage.setItem("token", user.getToken()); */
          req.body.password = ''
        } else {
          res.status(401).json({
            text: 'Authentification failed'
          })
        }
      }
    )
  }
}
