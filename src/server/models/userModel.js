const mongoose = require('mongoose')

/* const jwt = require("jwt-simple");

const config = require("../jwtConfig"); */

const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: 'Enter the username',
    unique: true
  },
  password: {
    type: String,
    required: 'Enter the password'
  },
  email: {
    type: String,
    required: 'Enter the email',
    unique: true
  },
  name: {
    type: String,
  },
  firstname: {
    type: String,
  },
  birthdate: {
    type: Date
  },
  quote: {
    type: String
  },
  language: {
    type: String
  },
  avatarPicture: {
    type: String
  }
})

userSchema.methods = {
  authenticate: function(password) {
    return bcrypt.compareSync(password, this.password);
  }
  /* getToken: function () {
        return jwt.encode({ id: this._id, status: this.role }, config.secret);
    }, */
}

module.exports = mongoose.model('Users', userSchema)
