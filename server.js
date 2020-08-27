const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");
//Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());

//Inciando MongoDB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

//Routes
app.get("/", (req, res) => {
  res.status(200).send("<p>Não tem nada pra ver aqui!</p>");
});
app.use("/api", require("./src/Routes"));

app.listen(3001);
