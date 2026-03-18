const express = require("express");
const adminControllers = require("../controllers/category.controller");
const providerMiddleware = require("../middlewares/auth.middleware");
const roleBased = require("../middlewares/role.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const routes = express.Router();

routes.post(
  "/",
  providerMiddleware.tokenVerify,
  roleBased("admin"),
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
