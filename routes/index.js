var express=require('express');
var router=express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/login', function(req, res){
    response.render('/exporter');
});

router.get('/register', function(req, res){
  res.render('contact', {
    title: 'Register'
  });
});

module.exports = router;
module.exports=router;
