const CategoryModel = require("../models/categoryModel");
const slugify = require("slugify");

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Category name is required",
      });
    }

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
      error,  
    });
  }
};


const updateCategoryController=async(req,res)=>{
  try {
    const {name}=req.body
    const{id}=req.params
    const category=await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
    res.status(200).send({
      success:true,
      message:"update category successfully",
      category
    })
    
  } catch (error) {
    console.log(error)
    res.status(401).send({
      success:false,
      error:error
    })
    
  }

}
const getAllCtegory=async(req,res)=>{
try {
  const category=await CategoryModel.find({})
  res.status(200).send({
    success:true,
    message:"all category",
    category
  })
} catch (error) {
  console.log(error)
  res.status(401).send({
    success:false,
    message:"error in category",
    error:error
  })
}
}
const singleCategory=async(req,res)=>{
  try {
    const {slug}=req.params
    const category=await CategoryModel.findOne({slug})
    res.status(200).send({
      success:true,
      message:"category found",
      category:category
    })
    
  } catch (error) {
    console.log(error)
    res.status(401).send({
      success:false,
      message:"error in category",
      error
    })
  }
}
const deleteCategory=async(req,res)=>{
  try {
    const {id}=req.params
    await CategoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:"category deleted successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      success:false,
      message:"error in deleting category",
      error:error
    })
  }
}

module.exports = {createCategoryController,updateCategoryController,getAllCtegory,singleCategory,deleteCategory};
