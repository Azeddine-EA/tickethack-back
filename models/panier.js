const mongoose = require('mongoose');

const panierSchema = mongoose.Schema({
	idTrip:{type: mongoose.Schema.Types.ObjectId, ref:'trips'},
});

const Panier = mongoose.model('panier', panierSchema);

module.exports = Panier
;