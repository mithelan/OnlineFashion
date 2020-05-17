const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const moment = require('moment');

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: {
    type: Array,
    default: []
  },
  history :{
    type:Array,
    default:[]
  },
  date: {
    type: Date,
    default: Date.now
  },

  token: {
    type: String,
  },
  tokenExp: {
    type: Number
  }
})

UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    console.log('password changed')
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
});

UserSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch)
  })
}

UserSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), 'secret')
  var oneHour = moment().add(1, 'hour').valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err)
    cb(null, user);
  })
}

UserSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, 'secret', function (err, decode) {
    user.findOne({ "_id": decode, "token": token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    })
  })
}




const User=mongoose.model('users',UserSchema);

module.exports=User;
