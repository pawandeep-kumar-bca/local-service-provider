const express = require("express");
const categoriesControllers = require("../controllers/category.controller");

const roleBased = require("../middlewares/role.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const {
  categoryValidator,
  providerCategoryCreateValidator,
  providerCategoryUpdateValidator,
} = require("../validators/categoryValidator");
const { imageUpload, documentUpload } = require("../middlewares/upload.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const providerMiddleware = require("../middlewares/provider.middleware");
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
router.get("/popular", categoriesControllers.getCategoryForPopular);
// ==========================================
// PROVIDER ADD CATEGORY APIS
//===========================================

// POST /api/categories/provider/create-category
router.post(
  "/provider/create-category",
  authMiddleware.tokenVerify,
  providerMiddleware,
  documentUpload.fields([{ name: "certificate", maxCount: 1 }]),
  providerCategoryCreateValidator,
  categoriesControllers.providerCategoryCreate,
);

router.get(
  "/provider/categories",
  authMiddleware.tokenVerify,
  providerMiddleware,
  categoriesControllers.getProviderCategories,
);

router.put(
  "/provider/categories/:categoryId",
  authMiddleware.tokenVerify,
  providerMiddleware,
  documentUpload.fields([{ name: "certificate", maxCount: 1 }]),
  providerCategoryUpdateValidator,
  categoriesControllers.providerCategoryUpdate,
);

router.put(
  "/:id",
   authMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  categoriesControllers.updateCategory,
);
router.delete(
  "/:id",
    authMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  categoriesControllers.deleteCategory,
);

module.exports = router;
