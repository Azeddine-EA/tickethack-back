var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const moment = require("moment");

/* GET Trips . */
router.get('/', function (req, res) {
  Trip.find().then(Trips => {
    res.json({ Trips: Trips })
    // console.log(typeof(Trips))
  })


});


router.get('/:departure/:arrival/:date', function (req, res) {
  const date = new Date(req.params.date);

Trip.find({
  departure: { $regex: new RegExp(req.params.departure, "i") },
  arrival: { $regex: new RegExp(req.params.arrival, "i") },
  date: {
    $gte: new Date(date.setHours(0, 0, 0, 0)),
    $lt: new Date(date.setHours(23, 59, 59, 999))
  }
}).then(trips => {
  res.json({ Trips: trips });
});
});


module.exports = router;
