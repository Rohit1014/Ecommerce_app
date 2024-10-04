const express = require("express");

const { isAdmin, requireSignin } = require("../middleware/authMiddleware");
const router = express.Router();
const { createCategoryController, updateCategoryController, getAllCtegory, singleCategory, deleteCategory } = require("../controllers/createCategoryController");

router.post("/create-category", requireSignin, isAdmin, createCategoryController);
router.put("/update-category/:id",requireSignin,isAdmin,updateCategoryController);
router.get("/category",getAllCtegory)
router.get("/single-category/:slug",singleCategory)
router.delete("/delete-category/:id",requireSignin,isAdmin,deleteCategory)

module.exports = router;
