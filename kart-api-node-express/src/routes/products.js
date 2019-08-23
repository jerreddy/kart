const express = require("express");
const db = require('../db/models');
const router = express.Router();

router.get("/", (req, res) => {
  return db.Product.findAll()
      .then((products) => res.send(products))
      .catch((err) => {
        console.log('There was an error querying products', JSON.stringify(err))
        return res.send(err)
      });
});

module.exports = router;
