const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    email_utilisateur: {
        type: String,
        required: true
    },
    produits: [{
        type: String,
        required: true
    }],
    prix_total: {
        type: Number,
        required: true
    },

    created_at: {
        type: Date,
        required: true,
    },

});
commandeSchema.pre('save', function(next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});


const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
