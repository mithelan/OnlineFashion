const router=require('express').Router();

let Contact = require('../model/contact.model');

router.route('/').get((req,res)=>{

    Contact.find()
        .then(contact=>res.json(contact))
        .catch(err=>res.status(400).json('Error :'+err));
});

router.route('/add').post((req,res)=>{

    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;
    const comments=req.body.comments;

    const newName=new Contact({
        name,
        phone,
        email,
        comments,
    });

    newName.save()
        .then(()=>res.json('Comments Added'))
        .catch(err=>res.status(400).json('Error'+err))
})

router.route('/:id').get((req,res)=>{
    Contact.findById(req.params.id)
        .then(contact=>res.json(contact))
        .catch(err=>res.status(400).json('Error'+err))

});



module.exports=router;
