var utils = {};
utils.getLowerBound = getLowerBound;
utils.organizeByDay = organizeByDay;
utils.getTimes = getTimes;
var _ = require('lodash');

var time_in_day = (60*60*24)*1000;

//finds beginning of today
function getLowerBound(number_of_days) {
  var today = Date.now() - (Date.now() % (60*60*24*1000));
  var lower_bound = today - number_of_days * time_in_day;
  return new Date(lower_bound).toISOString();
}

function organizeByDay(stats, number_of_days, type) {
  //beginning of day
  var today = Date.now() - (Date.now() % (60*60*24*1000));
  var results = [];

  var dateProperty = 'date';
  if (type === 'users') {
    dateProperty = 'created_at';
  }

  var count = 0;
  var currentDay = today;

  for (var i = 0; i < number_of_days; i++) {

    var array = _.filter(stats, function(index) {
                  var date = Number(new Date(index[dateProperty]));
                  if (date > today && date < today + time_in_day) {
                    return index;
                  }
                });
    today -= time_in_day;
    results.push(array.length);
  }

  return results.reverse();
}

function getTimes(number_of_days) {
  var results = [];
  var today = Date.now() - (Date.now() % (60*60*24*1000));

  for (var i = 0; i < number_of_days; i++) {
    var dateString = formatDateForC3(new Date(today));
    results.push(dateString);
    today -= time_in_day;
  }

  return results.reverse();
}

function formatDateForC3(date) {
  var dateString = "";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  dateString += year +'-' + month +'-' +day;
  return dateString;
}

module.exports = utils;
