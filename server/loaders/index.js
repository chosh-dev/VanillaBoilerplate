const expressLoader = require("./express");

const loader = async ({ app }) => {
  await expressLoader({ app });
  console.log("✔ Express Initialized");

  return app;
};

module.exports = loader;
