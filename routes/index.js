var express = require('express');
var Router = express.Router();

Router.get('/', function(req, res, next){
    console.log("here is a console.log ");
    res.send("hello world ");
    next();
});

module.exports = Router;