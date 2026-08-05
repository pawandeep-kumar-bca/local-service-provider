const express = require("express");
const categoriesControllers = require("../controllers/category.controller");
const providerMiddleware = require("../middlewares/auth.middleware");
const roleBased = require("../middlewares/role.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const { categoryValidator } = require("../validators/categoryValidator");
const { imageUpload } = require("../middlewares/upload.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware.tokenVerify,
  roleBased("admin"),
  imageUpload.fields([{ name: "icon", maxCount: 1 }]),
  categoryValidator,
  categoriesControllers.createCategory,
);
router.get("/", categoriesControllers.getCategory);
router.get("/tabs", categoriesControllers.getCategoryTabs);
router.get('/popular',categoriesControllers.getCategoryForPopular)

router.put(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  categoriesControllers.updateCategory,
);
router.delete(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  categoriesControllers.deleteCategory,
);

module.exports = router;
