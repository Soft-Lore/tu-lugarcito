const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(require("./router/index"));

module.exports = app;