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

router.get("/:id", (req,res) => {
    return db.Product.findByPk(parseInt(req.params.id))
        .then((product) => {
            if(product) return res.send(product);
            else return res.status(404).send("Product not found");
        })
        .catch((err) => {
            console.log('There was an error querying for product', JSON.stringify(err))
            return res.send(err)
        });
});


router.post("/", (req, res) => {
    const product = req.body;
    return db.Product.create(product)
        .then((p) => res.send(p))
        .catch((err) => {
            console.log('There was an error saving product', JSON.stringify(err))
            return res.send(err)
        });
});

router.put("/:id", (req, res) => {
    const product = req.body;
    const id = parseInt(req.params.id);
    return db.Product.update(product, { where: { id: id } })
        .then((count) => res.send({...product, id: id}))
        .catch((err) => {
            console.log('There was an error updating product', JSON.stringify(err))
            return res.send(err)
        });
});


router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    return db.Product.destroy({ where: { id: id } })
        .then((count) => res.send())
        .catch((err) => {
            console.log('There was an error deleting product', JSON.stringify(err))
            return res.send(err)
        });
});

module.exports = router;
