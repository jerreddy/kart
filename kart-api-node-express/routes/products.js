const express = require("express");
const router = express.Router();

const products = [
  { id: 1, code: "P001", name: "Product1", price: 25.0 },
  { id: 2, code: "P002", name: "Product2", price: 15.50 },
  { id: 3, code: "P003", name: "Product3", price: 45.0 }
];

router.get("/", (req, res) => {
  res.send(products);
});

module.exports = router;
