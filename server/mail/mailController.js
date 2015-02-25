var config = require('config');
var sendGridInfo = config.get('mail');
var sendgrid  = require('sendgrid')(sendGridInfo.api_user, sendGridInfo.api_key);

function sendUpdateEmail(total, unique) {
  sendgrid.send(createVerificationEmail(email, link), function(err, json) {
      if (err) {
          return console.error(err);
      } else {
          res.sendStatus(200);
      }
  });
};

module.exports = sendUpdateEmail;