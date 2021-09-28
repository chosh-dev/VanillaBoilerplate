const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
