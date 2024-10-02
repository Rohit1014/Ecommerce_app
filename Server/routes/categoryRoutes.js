const express = require("express");

const { isAdmin, requireSignin } = require("../middleware/authMiddleware");
const router = express.Router();
const { createCategoryController } = require("../controllers/createCategoryController");

router.post("/create-category", requireSignin, isAdmin, createCategoryController);

module.exports = router;
