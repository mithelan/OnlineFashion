const router = require('express').Router();
let StockManager = require('../model/stockmanager.model');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt=  require('bcrypt');


process.env.SECRET_KEY='secret';

router.route("/login").post((req, res) => {
StockManager.findOne({

        username: req.body.username

}).then(stockmanager =>{
    if(stockmanager){
        if(bcrypt.compareSync(req.body.password,stockmanager.password)){
            const stockie={
                username:stockmanager.username,
                password: stockmanager.password,
                email:stockmanager.email,
                contactno:stockmanager.contactno,
            }
            let token=jwt.sign(stockie,process.env.SECRET_KEY,{expiresIn: 1440})
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


router.route('/profile').get((req,res) =>{
    var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY);
    StockManager.findOne({
        username:decoded.username
    }).then(stockmanager =>{
        if(stockmanager){
            res.json(stockmanager);
        }else{
            res.send("USER DOES NOT EXIST")
        }
    })
        .catch(err =>{
            res.send('error :'+err);
        })
})



router.route("/all").get((req, res) => {
    StockManager.find()
        .then((StockManager) => res.json(StockManager ))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/adds").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const contactno = Number(req.body.contactno);

//qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'parkme1998@gmail.com', // generated ethereal user
            pass: 'madu1998 ' // generated ethereal password
        }
    });

    // send mail with defined transport object
    const mailOptions = {
        from: 'parkme1998@gmail.com', // sender address
        to: email, // list of receivers
        subject: 'ulla porathuku saavi', // Subject line
        html: 'username & password'+username,password// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });




//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    const newStockManager = new StockManager({
        username,
        password,
        email,
        contactno,

    });

    newStockManager
        .save()
        .then(() => res.json("StockManager  added!"))
        .catch((err) => res.status(400).json("Error: " + err));

});


module.exports = router;
