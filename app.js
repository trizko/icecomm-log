var mongoose = require('mongoose');
var config = require('config');
var Stat = require('./server/stat/statModel');
var time_yesterday = Date.now()/1000 - 24 * 60 60;
var sendUpdateEmail = require('./server/mail/mailController');
var _ = require('lodash');

Stat.find({date: { $gte : time_yesterday}}, function(err, foundUsers) {
  if (!err) {
    var total = foundUsers.length;
    var unique = _.uniq(foundUsers, 'apiKey').length;
    sendUpdateEmail(total, unique);
  }
});

