var mongoose = require('mongoose');
var config = require('config');
var Stat = require('./server/stat/statModel');
var time_yesterday = Date.now()/1000 - 24 * 60 60;
var mailController = require('./server/mail/mailController');

Stat.count({data: { $gte : time_yesterday}}, function(err, count) {
  if (!err) {
    mailController.sendMail(count);
  }
});

