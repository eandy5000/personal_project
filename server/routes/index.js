var express = require('express');
var Router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/tic_chat');

var Cat = mongoose.model('Cat', {name:String});

Router.get('/', function(req, res, next){
    console.log("here is a console.log ");
    res.sendFile(path.join(__dirname, './public/views/index.html', file));
});

module.exports = Router;