const express = require("express");
const Routes = express.Router();
const ProductController = require("./controllers/ProductControler");

Routes.get("/products", ProductController.index);
Routes.get("/products/:_id", ProductController.entity);
Routes.post("/products", ProductController.add);
Routes.put("/products/:_id", ProductController.update);
Routes.delete("/products/:_id", ProductController.delete);

module.exports = Routes;
