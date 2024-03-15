// competence.router.js
const express = require('express');
const router = express.Router();
const commandeController = require('../controller/Commande');

router.post('/ajouter', commandeController.createCommande);

module.exports = router;
