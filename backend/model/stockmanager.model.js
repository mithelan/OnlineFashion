const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockmanagerSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        contactno: { type: Number, required: true },

    },
    {
        timestamps: true,
    }
);

const StockManager = mongoose.model("StockManager", stockmanagerSchema);

module.exports = StockManager;
