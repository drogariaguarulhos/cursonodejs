const mongoose = require("mongoose");

const Products = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    let { page = 1 } = req.query;
    const products = await Products.paginate(
      {},
      { page: Number(page), limit: 10 }
    );

    return res.status(200).json(products);
  },

  async entity(req, res) {
    const { _id } = req.params;
    const product = await Products.findById(_id);
    res.status(200).json(product);
  },

  async add(req, res) {
    const product = await Products.create(req.body);

    return res.status(200).json(product);
  },

  async update(req, res) {
    const { _id } = req.params;
    const product = await Products.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const product = await Products.findByIdAndDelete(_id);
    res.status(200).json(product);
  },
};
