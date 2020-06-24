const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model

const User = require("../../model/User");

// @route  POST api/auth
// @description   Authenticate the user
// PUBLIC

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Checks for existing user
  User.findOne({ email: email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token: token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

//WISHTOLIST

//post

router.get("/addToCart/:id", auth, (req, res) => {
  User.findOne({ _id: req.user.id }, (err, userInfo) => {
    let duplicate = false;
    userInfo.Cart.forEach((Cart) => {
      if (Cart.id === req.params.id) {
        duplicate = true;
      }
    });

    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user.id, "Cart.id": req.params.id },
        { $inc: { "Cart.$.quantity": 1 } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.Cart);
        }
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $push: {
            Cart: {
              id: req.params.id,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });
          res.status(200).json(userInfo.Cart);
        }
      );
    }
  });
});

// route  GET api/auth/user
//private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});


router.route("/userid").get(auth,(req, res) => {
    User.findById(req.user.id)
        .exec((err, us) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, us });
        });
});

router.get("/getUsers", (req, res) => {
  User.find().exec((err, users) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, users });
  });
});

//DELETE THE USER
router.route("/delete").delete(auth, (req, res) => {
  User.findByIdAndDelete(req.user.id)
    .then(() => res.json("USER DELETED"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/updateuser").put(auth, (req, res) => {
  User.findById(req.user.id)
    .then((users) => {
      users.email = req.body.email;
      users
        .save()
        .then(() => res.json("User Details updatedd!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
