const express = require("express");
const router = express.Router();
const { CustomError } = require("../utils");

router.get("/status", (req, res, next) => {
  try {
    res.status(200).json({ success: true });
  } catch (e) {
    next(e);
  }
});

router.get("/error", (req, res, next) => {
  try {
    throw CustomError(400, "error message");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
