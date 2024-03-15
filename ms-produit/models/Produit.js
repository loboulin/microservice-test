const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
    },
}, { collection: 'produit' }); // Définition explicite du nom de la collection

produitSchema.pre('save', function(next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

const Produit = mongoose.model('Produit', produitSchema);

module.exports = Produit;
