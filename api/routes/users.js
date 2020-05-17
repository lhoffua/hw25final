const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const cors = require('cors')
var User = mongoose.model('users')
router.use(cors())

var MongoClient = require('mongodb').MongoClient



router.get("/", function(req, res, next) {
  res.send("users is working properly");
});
/*
users.post('/register', (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password,
    desc: req.body.desc,
    pfp: req.body.pfp
  }

  User.findOne({
    username: req.body.username
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.username + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            username: req.body.username,
            desc: req.body.desc,
            pfp: req.body.pfp
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
*/
router.get('/profile', function(req, res) {
  MongoClient.connect('mongodb+srv://lex:i@cluster0-vbnzh.mongodb.net/test?retryWrites=true&w=majority', function (err, client) {
  if (err) throw err

  var db = client.db('hw2')

  db.collection('users').findOne({username: "lexihoff"},function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});})

module.exports = router