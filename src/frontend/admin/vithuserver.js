

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


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
    console.log("MongoDB database connection established successfully");
});
const stockManagerRouter = require("./routes/stockmanager");
const categoryRouter =require ("./routes/category");
const AdminRouter =require ("./routes/admin");

app.use("/stockmanager",stockManagerRouter);
app.use("/adminaction",AdminRouter);

app.use("/category",categoryRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});

