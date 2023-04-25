var express = require('express');
var router = express.Router();
const { Product } = require('../models')

/* GET users listing. */
router.get('/', function(req, res) {
    Customer.findAll()
    .then((data)=>res.status(200).send(data))
    .catch((error) => res.status(400).send(error))
});

router.post('/addproduct', function(req, res){
  Product.create({
    product_name: req.body.product_name,
    category: req.body.category,
    price: req.body.price
  }) .then((data) => res.status(200).send(data))
  .catch((error) => res.status(400).send(error))
})

module.exports = router;
