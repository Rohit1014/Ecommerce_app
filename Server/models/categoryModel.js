const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Fix: changed 'require' to 'required'
        unique: true
    },
    slug: {
        type: String,
        lowercase: true
    },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;
