// competence.router.js
const express = require('express');
const router = express.Router();
const produitController = require('../controller/Produit');

router.get('/acheter', produitController.getProduits);
router.post('/ajouter', produitController.addProduit);

module.exports = router;
