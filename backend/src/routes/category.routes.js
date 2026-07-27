const express = require("express");
const adminControllers = require("../controllers/category.controller");
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
  adminControllers.createCategory,
);
router.get("/", adminControllers.getCategory);

router.put(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  adminControllers.updateCategory,
);
router.delete(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  adminControllers.deleteCategory,
);

module.exports = router;
