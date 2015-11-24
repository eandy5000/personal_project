var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/tic_chat');

var Cat = mongoose.model('Cat', {name:String});


router.post('/add', function(req, res, next){
    var kitty = new Cat({name:req.body.name});
    kitty.save(function(err){
        if(err) console.log(err);
        res.send(kitty.toJSON());
        next();
    });
});

router.get('/cats', function(request, response, next){
    return Cat.find({}).exec(function(err, cats){
        if(err) throw new Error(err);
        response.send(JSON.stringify(cats));
        next();
    });
});

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

module.exports = router;