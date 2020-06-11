"use strict";
(function () {
  const express = require("express");
  const bodyParser = require("body-parser");
  const path = require("path");

  const app = express();
  const port = 3000;

  app.use(express.static("./public"));
  app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
  app.get("/", (req, res) => {
    res.sendFile("index.html");
  });
  const server = app.listen(port, () =>
    console.log(`Express server listening on port ${port}`)
  );

  module.exports = app;
})();
