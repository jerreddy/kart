const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Kart Express API", message: "Kart API" });
});

module.exports = router;