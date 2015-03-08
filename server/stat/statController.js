var Stat = require('./statModel');
var statController = {};
var utils = require('../utils');
var _ = require('lodash');

// statController.getApiKeys = getApiKeys;
statController.getConnections = getConnections;

function getConnections(req, res) {
  var number_of_days = req.query.number_of_days;
  var lower_bound = utils.getLowerBound(number_of_days);

  //more recent first
  Stat.find({date: { $gte : lower_bound}}).sort({ date: - 1}).exec(function(err, foundStats) {
    if (!err) {
      // console.log(foundStats);
      var total = utils.organizeByDay(foundStats, number_of_days);
      var unique = utils.organizeByDay(_.uniq(foundStats, 'apiKey'), number_of_days);
      var times = utils.getTimes(number_of_days);
      var payload = {};
      payload.total = total;
      payload.unique = unique;
      payload.times = times;
      console.log(times);
      res.status(200).send(payload);
    }
  });
}

module.exports = statController;
