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
  const price = req.body.price;
  const gender = req.body.gender;
  const size = req.body.size;
  const color = req.body.color;
  const description = req.body.description;
  const filename = req.body.filename;
  const quantity = Number(req.body.quantity);

  const newProduct = new Product({
    title,
    brand,
    price,
    gender,
    size,
    color,
    description,
    filename,
    quantity,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/upload").post((req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`../../public/images/productPhotos/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

//to homepage-Mithi
router.get("/getProducts", (req, res) => {
  Product.find().exec((err, products) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, products });
  });
});

//mithiproducts/products_by_id?=id$(productId)&type=single'
router.get("/products_by_id", (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {
  }
  Product.find({ _id: { $in: productIds } })
    .populate("writer")
    .exec((err, products) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(products);
    });
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
      product.filename = req.body.filename;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
