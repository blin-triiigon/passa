const express = require("express");
const router = express.Router();

//Basic Route
router.get("/", (req, res) => {
    res.send("Welcome");
});

module.exports = router;