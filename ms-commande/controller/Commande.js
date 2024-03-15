const Commande = require('../models/Commande');
const express = require('express');
exports.createCommande = (req, res) => {
    const commande = new Commande({
        ...req.body
    });
    commande.save()
        .then(() => res.status(201).json({ message: 'Commande enregistrée !' }))
        .catch(error => res.status(400).json({ error }));
}