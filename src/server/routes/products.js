const router = require("express").Router();
let Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const brand = req.body.brand;
  const price = Number(req.body.price);
  const gender = req.body.gender;
  const size = req.body.size;
  const color = req.body.color;
  const description = req.body.description;

  const newProduct = new Product({
    title,
    brand,
    price,
    gender,
    size,
    color,
    description,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.title = req.body.title;
      product.brand = req.body.brand;
      product.price = Number(req.body.price);
      product.gender = req.body.gender;
      product.size = req.body.size;
      product.color = req.body.color;
      product.description = req.body.description;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
