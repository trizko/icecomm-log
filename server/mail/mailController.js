var config = require('config');
var sendGridInfo = config.get('mail');
var sendgrid  = require('sendgrid')(sendGridInfo.api_user, sendGridInfo.api_key);
var mailCreator = require('./mailCreator');

function sendUpdateEmail(total, unique) {
  sendgrid.send(mailCreator.createUpdateEmail(total, unique), function(err, json) {
      if (err) {
          return console.error(err);
      } else {
        console.log('success');
      }
  });
};

module.exports = sendUpdateEmail;