var Stat = require('./statModel');

var statController = {};
statController.getApiKeys = getApiKeys;
statController.getConnections = getConnections;

var time_yesterday = new Date((Date.now()/1000 - 30 * 24 * 60 * 60)*1000).toISOString();

function getConnections() {
  Stat.find({date: { $gte : time_yesterday}}, function(err, foundUsers) {
    if (!err) {
      var total = foundUsers.length;
      var unique = _.uniq(foundUsers, 'apiKey').length;
      sendUpdateEmail(total, unique);
    }
  });
}

function getApiKeys() {

}

module.exports = statController;
