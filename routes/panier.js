var express = require('express');
var router = express.Router();
const Panier = require('../models/panier');
const moment = require("moment");


router.get('/', function (req, res) {
    Panier.find()
    .populate('idTrip')
    .then(panier=>{
      res.json({Panier: panier})
    })
});

router.post('/:idTrip', function (req, res) {
    const panierTrips = new Panier({
      idTrip: req.params.idTrip
    })
    panierTrips.save().then(()=>{
      // res.json({result: true})
    })

    Panier.find()
    .populate('idTrip')
    .then(panier=>{
      res.json({Panier: panier})
    })
});

router.delete('/:idPanier', function (req, res) {
    Panier.deleteOne({_id:req.params.idPanier}).then(()=>{
      
      Panier.find()
      .populate('idTrip')
      .then(panierData=>{
        res.json({Panier: panierData})
      })
    })
  });


module.exports = router;
