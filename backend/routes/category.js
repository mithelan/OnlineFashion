const router = require("express").Router();
let Category = require("../model/category.model");


router.route("/addcategory").post((req, res) => {
    const category = req.body.category;


    const Categorynew = new Category({
        category,

    });

    Categorynew
        .save()
        .then(() => res.json("Product added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
