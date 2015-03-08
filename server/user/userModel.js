var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  apiKey: {type: String},
  url: {type: String, default: ""},
  user_limit: {type: Number, default: 1000},
  created_at: {type: Date, default: new Date()}
});

module.exports = mongoose.model('User', userSchema);