const express = require("express");
const path = require("path");

const apiRouter = require("./api");

const routers = async ({ app }) => {
  // app.use(express.static(path.join(__dirname, "../../client/dist")));
  app.use("/api", apiRouter);

  app.use((req, res) => res.status(404).json({ msg: "Not Found" }));

  app.use((err, req, res, next) => {
    app.logger.error("⛔ " + err);
    err.status
      ? res.status(err.status).json({ msg: err.message })
      : res.status(500).json({ msg: err.message });
  });

  console.log("✅ Routers Initialized");

  return app;
};

module.exports = routers;
