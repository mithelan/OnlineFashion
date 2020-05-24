const router = require('express').Router();
let Admin = require('../model/admin.model');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt=  require('bcrypt');


process.env.SECRET_KEY='secret';

router.route("/loginadmin").post((req, res) => {
    Admin.findOne({

        username: req.body.username

    }).then(admin =>{
        if(admin){
            if(bcrypt.compareSync(req.body.password,admin.password)){
                const admini={
                    username:admin.username,
                    password: admin.password,
                    email:admin.email,

                }
                let token=jwt.sign(admini,process.env.SECRET_KEY,{expiresIn: 1440})
                res._send(token);
            }else{
                res.json({error:"USER DOES NOT EXIST"})
            }

        }else{
            res.json({error:"USER DOES NOT EXIST"})
        }
    })

        .catch(err =>{
            res.send('error:'+err);
        })


});

router.route("/addadmin").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;




    const newAdmin = new Admin({
        username,
        password,
        email,


    });

    newAdmin
        .save()
        .then(() => res.json("StockManager  added!"))
        .catch((err) => res.status(400).json("Error: " + err));

});



module.exports = router;
