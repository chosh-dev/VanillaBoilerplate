const express = require("express");
const loaders = require("./loaders");
const routes = require("./routes");
const config = require("./config");

const startServer = async () => {
  const app = express();
  await loaders({ app });
  await routes({ app });

  app.listen(config.port, () => {
    console.log("🧙 Listening on port " + config.port);
  });
};

startServer()
