// competence.router.js
const express = require('express');
const router = express.Router();
const produitController = require('../controller/Produit');

router.post('/acheter', produitController.getProduits);
router.get('/ajouter', produitController.addProduit);

module.exports = router;
