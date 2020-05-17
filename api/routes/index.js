var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://lex:i@cluster0-vbnzh.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const userSchema = require('../models/User.js')
const router = express.Router();
var User = mongoose.model('users')

/* GET home page. */
router.get('/root', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  User.findOne({
    username: res.body
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
});


module.exports = router;
