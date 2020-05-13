const express = require('express')
const users=require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const async = require('async');

//AUTH
const auth=require('../middleware/auth')

const User = require('../model/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'


users.get("/auth",  (req, res) => {
  res.status(200).json({
    _id: req.users._id,
    isAuth: true,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    cart: req.user.cart,
    history: req.user.history
  });
});


users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
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
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {//comparing the submited pw and the user pw
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
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

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)// token from front end is

  User.findOne({
    _id: decoded._id
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
})

//Mithi for Add to cart
users.post('/addToCart',(req,res)=>{

   User.find({_id:req.user._id}
   ,(err,userInfo)=> {

         let duplicate = false;

         userInfo.cart.forEach((cartInfo) => {
           if (cartInfo.id === req.query.productId) {
             duplicate = true;
           }

         })

         if (duplicate) {
           User.findOneAndUpdate(
               {_id: req.user._id, 'card.id': req.query.productId},
               {$inc: {'cart.$.quantity': 1}},
               {new: true},
               () => {
                 if (err) return res.json({success: false, err});
                 res.status(200).json(userInfo.cart)
               }
           )
         } else {
           User.findOneAndUpdate(
               { _id: req.user._id },
               {
                 $push: {
                   cart: {
                     id: req.query.productId,
                     quantity: 1,
                     date: Date.now()
                   }
                 }
               },
               { new: true },
               (err, userInfo) => {
                 if (err) return res.json({ success: false, err });
                 res.status(200).json(userInfo.cart)
               }
           )
         }
       })
});


module.exports = users
