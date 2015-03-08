var mongoose = require('mongoose');

var statsSchema = mongoose.Schema({
  date: { type: Date, required: true},
  apiKey: {type: String},
  room: {type: String}
});

module.exports = mongoose.model('Stat', statsSchema);
