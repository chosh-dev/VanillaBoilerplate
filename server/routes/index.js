const express = require("express");
const path = require("path");

const apiRouter = require("./api");

const routers = async ({ app }) => {
  app.get("/status", (req, res) => res.status(200).end());

  app.use("/api", apiRouter);

  // app.use(express.static(path.join(__dirname, "../../client/dist")));

  app.use((req, res) => {
    res.status(404).send("Not Found");
  });

  app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });

  console.log("✔ Routers Initialized");

  return app;
};

module.exports = routers;
