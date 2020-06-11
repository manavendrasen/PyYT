"use strict";
(function () {
  const express = require("express");
  const bodyParser = require("body-parser");
  const path = require("path");
  const pyyt = require(__dirname + "/linkers/pyyt.js");

  const app = express();
  const port = 3000;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static(__dirname + "/public"));
  app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.post("/", (req, res) => {
    var link = req.body.link;
    var loc = req.body.loc;
    console.log("working post request");
    pyyt(link, loc);
  });
  const server = app.listen(port, () =>
    console.log(`Express server listening on port ${port}`)
  );

  module.exports = app;
})();
