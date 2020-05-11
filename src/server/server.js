const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//narthi
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//narthi
app.use(fileUpload());

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection estabsished successfully");
});

//narthi
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);
//end of narthi

// narthi
// app.post("/upload", (req, res) => {
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   const file = req.files.file;

//   file.mv(`${__dirname}/productPics/${file.name}`, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }

//     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
//   });
// });
// end of narthi

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
