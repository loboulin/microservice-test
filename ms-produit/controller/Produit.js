const Produit = require('../models/Produit');
const express = require('express');


exports.getProduits = (req, res) => {
    Produit.find()
        .then(produits => {
            res.status(200).json(produits);
        })
        .catch(error => {
            res.status(400).json({ error });
        });
}

exports.addProduit = (req, res) => {
    const produit = new Produit({
        ...req.body
    });
    produit.save()
        .then(() => res.status(201).json({ message: 'Produit enregistré !' }))
        .catch(error => res.status(400).json({ error }));
}

