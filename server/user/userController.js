var User = require('./userModel');
var userController = {};
var utils = require('../utils');
var _ = require('lodash');

userController.getUsers = getUsers;

function getUsers(req, res) {
  var number_of_days = req.query.number_of_days;
  var lower_bound = utils.getLowerBound(number_of_days);

  //more recent first
  User.find({created_at: { $gte : lower_bound}}).sort({ date: - 1}).exec(function(err, foundUsers) {
    if (!err) {
      var users = utils.organizeByDay(foundUsers, number_of_days, 'users');
      var times = utils.getTimes(number_of_days);
      var payload = {};
      payload.users = users;
      payload.times = times;
      res.status(200).send(payload);
    }
  });
}

module.exports = userController;
