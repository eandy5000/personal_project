var express = require('express');
var Router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/tic_chat');

var Cat = mongoose.model('Cat', {name:String});

Router.get('/', function(req, res, next){
    console.log("here is a console.log ");
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = Router;