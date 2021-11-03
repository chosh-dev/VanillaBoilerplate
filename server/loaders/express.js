const express = require("express");
const session = require("express-session");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const config = require("../config");

const expressLoader = async ({ app }) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session(config.sessionConfig));

  return app;
};

module.exports = expressLoader;
