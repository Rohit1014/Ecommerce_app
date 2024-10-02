const CategoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    // Validation: Check if name is provided
    if (!name) {
      return res.status(400).send({
        message: "Category name is required",
      });
    }

    // Check if the category already exists
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already exists",
      });
    }

    // Create a new category
    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();

    // Success response
    return res.status(201).send({
      success: true,
      message: "New category created successfully",
      category,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error creating category",
      error,  // Optionally include the error object for more detail
    });
  }
};

module.exports = {createCategoryController};
