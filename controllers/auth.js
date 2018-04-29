const db = require('../models');
const User = db.User;
var passport = require('passport');

let userController = {
  index: function(req, res) {
    User.findAll().then(function(users) {
      res.render('login');
    });
  },
  signup: function(req, res) {
    require('../controllers/passport.js')(passport);
    res.render('signup',{ message:''});
  },
  signin: function(req, res) {
    require('../controllers/passport.js')(passport);
    res.render('login',{ message:''});
  },
  logout: function(req, res) {
    req.session.destroy(function(err) {
      res.redirect('/task');
    });
  }
};
module.exports = userController;
