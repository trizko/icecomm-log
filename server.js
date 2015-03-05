var express = require('express');
var app = express();
var statController = require('./server/stat/statController');


app.use(express.static(__dirname + '/client'));

app.use('/apiKeys', statController.getApiKeys);
app.use('/connections', statController.getConnections);
// app.use('/users', userController.getUsers);