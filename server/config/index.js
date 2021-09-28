const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,

  sessionConfig: {
    secret: process.env.SESSION_KEY,
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
  },
};
