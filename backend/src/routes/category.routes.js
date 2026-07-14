const express = require("express");
const adminControllers = require("../controllers/category.controller");
const providerMiddleware = require("../middlewares/auth.middleware");
const roleBased = require("../middlewares/role.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const { categoryValidator } = require("../validators/categoryValidator");
const upload = require("../middlewares/upload.middleware");
const routes = express.Router();

routes.post(
  "/",
  providerMiddleware.tokenVerify,
  upload.fields([{ name: "icon", maxCount: 1 }]),
  roleBased("admin"),
  categoryValidator,

  adminControllers.createCategory,
);
routes.get("/", adminControllers.getCategory);

routes.put(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  adminControllers.updateCategory,
);
routes.delete(
  "/:id",
  providerMiddleware.tokenVerify,
  validateObjectId("id"),
  roleBased("admin"),
  adminControllers.deleteCategory,
);

module.exports = routes;
