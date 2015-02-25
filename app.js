<<<<<<< HEAD
var mongoose = require('mongoose');
var Stat = require('./server/stat/statModel');
var time_yesterday = new Date((Date.now()/1000 - 24 * 60 * 60)*1000).toISOString();
var sendUpdateEmail = require('./server/mail/mailController');
var _ = require('lodash');

mongoose.connect("mongodb://azai91:$hackreactor&@ds031271.mongolab.com:31271/icecommusers");

Stat.find({date: { $gte : time_yesterday}}, function(err, foundUsers) {
  if (!err) {
    var total = foundUsers.length;
    var unique = _.uniq(foundUsers, 'apiKey').length;
    sendUpdateEmail(total, unique);
  }
});

