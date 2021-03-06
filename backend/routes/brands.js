const router = require("express").Router();
let Brand = require("../model/brand.model");

let Category = require("../model/category.model");

const auth = require("../middleware/auth");

router.route("/").get((req, res) => {
  Brand.find()
    .then((brands) => res.json(brands))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/category").get((req, res) => {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const brand = req.body.brand;
  const phone = req.body.phone;
  const address = req.body.address;

  const newBrand = new Brand({
    brand,
    phone,
    address,
  });

  newBrand
    .save()
    .then(() => res.json("Brand added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/upload").post((req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(
    `../OnlineFashion/public/images/productPhotos/${file.name}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    }
  );
});

router.route("/get/:id").get((req, res) => {
  Brand.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

//narthi get products by category
router.route("/categoryProduct/:category").get((req, res) => {
  Product.find({ category: req.params.category })
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

//to homepage-Mithi
router.get("/getProducts", (req, res) => {
  Product.find().exec((err, products) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, products });
  });
});

//to homepage-Mithi
router.get("/getProducts/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

//mithiproducts/products_by_id?=id$(productId)&type=single'
router.get("/products_by_id", (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    productIds = [] = ids.map((Cart) => {
      return Cart;
    });
  }
  Product.find({ _id: { $in: productIds } })
    .populate("writer")
    .exec((err, products) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(products);
    });
});

router.get("/products_by_comment", (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {
  }
  Product.find({ _id: { $in: productIds } })
    .populate("writer")
    .exec((err, Review) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(Review);
    });
});

router.route("/:id").delete((req, res) => {
  Brand.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Brand.findById(req.params.id)
    .then((product) => {
      product.brand = req.body.brand;
      product.phone = req.body.phone;
      product.address = req.body.address;

      product
        .save()
        .then(() => res.json("Brand updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//COMMENT

router.route("/comments/:id").post(auth, (req, res) => {
  Product.findById(req.params.id)
    .then((post) => {
      const newComment = {
        user: req.user.id,
        comments: req.body.comments,
      };

      // Add to comments array
      post.Review.unshift(newComment);

      // Save
      post.save().then((post) => res.json(post));
    })
    .catch((err) =>
      res.status(404).json({ postnotfound: "No comments found" })
    );
});

//RATEEEE
router.route("/rate/:id").post(auth, (req, res) => {
  Product.findById(req.params.id)
    .then((post) => {
      const newRate = {
        user: req.user.id,
        rating: req.body.rating,
      };

      // Add to comments array
      post.Rate.unshift(newRate);

      // Save
      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: "No ratting found" }));
});

module.exports = router;
