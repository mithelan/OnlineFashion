const router=require('express').Router();

let Checkout = require('../model/checkout');

router.route('/').get((req,res)=>{

    Checkout.find()
        .then(checkout=>res.json(checkout))
        .catch(err=>res.status(400).json('Error :'+err));
});

router.route('/add').post((req,res)=>{

    const address=req.body.address;
    const phone=req.body.phone;


    const newCheckout=new Checkout({
        address,
        phone,

    });

    newCheckout.save()
        .then(()=>res.json('Comments Added'))
        .catch(err=>res.status(400).json('Error'+err))
})

router.route('/:id').get((req,res)=>{
    Checkout.findById(req.params.id)
        .then(contact=>res.json(contact))
        .catch(err=>res.status(400).json('Error'+err))

});



module.exports=router;
