var express = require('express');
var app = express();
var statController = require('./server/stat/statController');
var userController = require('./server/user/userController');

var mongoose = require('mongoose');
var config = require('config');
mongoose.connect(config.get('mongo'));

app.use(express.static(__dirname + '/client'));

app.use('/connections', statController.getConnections);
app.use('/users', userController.getUsers);

app.listen(config.get('port'));
