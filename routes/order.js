var express = require('express');
var router = express.Router();
const { Order } = require('../models')

/* GET users listing. */
router.get('/', function(req, res) {
    Order.findAll()
    .then((data)=>res.status(200).send(data))
    .catch((error) => res.status(400).send(error))
});

router.post('/addorder', function(req, res){
  Order.create({
    customer_id: req.body.customer_id,
    order_date: req.body.order_date,
    total_amount: req.body.total_amount
  }) .then((data) => res.status(200).send(data))
  .catch((error) => res.status(400).send(error))
})

module.exports = router;
