const Produit = require('../models/Produit');
const express = require('express');


exports.getProduits = (req, res) => {
    console.log('getProduits')
    Produit.find()
        .then(produits => {
            res.status(200).json(produits);
        })
        .catch(error => {
            res.status(400).json({ error });
            console.log(error);
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

