const expressLoader = require("./express");
const loggerLoader = require("./logger");

const loader = async ({ app }) => {
  await expressLoader({ app });
  console.log("✅ Express Initialized");

  await loggerLoader({ app });
  console.log("✅ logger Initialized");

  return app;
};

module.exports = loader;
