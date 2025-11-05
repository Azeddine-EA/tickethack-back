var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');
const Panier = require('../models/panier');

router.get('/',  function (req, res) { 
  Booking.find()
    .populate('idTrip')
    .then(bookingData => {

      res.json({ bookings: bookingData });
    })



});
router.post('/', async function (req, res) { // <-- async ici 
  const panierData = await Panier.find();

  if (!panierData || panierData.length === 0) {
    return res.json({ result: false, error: "Panier vide" });
  }


  for (const p of panierData) {
    const booking = new Booking({
      idTrip: p.idTrip._id,
    });
    await booking.save();
  }


  const bookingData = await Booking.find().populate('idTrip');


  await Panier.deleteMany();

  res.json({ result: true, bookings: bookingData });
});

module.exports = router;
