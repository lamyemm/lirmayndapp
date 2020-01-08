const users = require('../controllers/userController.js')
const mongoose = require('mongoose')
const User = mongoose.model('Users')
/* const ValidateJWT = require("../middleware/validateJWT"); */

module.exports = function(app) {
  // todoList Routes

  app
    .route('/users')
    .get(users.listAllUsers)
    .post(users.createAUser)
    .delete(users.deleteUser)

  app.route('/login').post(users.logIn)

  /* app.get("/me", ValidateJWT.validate, (req, res, next) => {
        User.findOne({_id: req._id})
            .then(user => {
                res.json({username: user.username});
            })
            .catch(err => next(err));
    }); */
}
