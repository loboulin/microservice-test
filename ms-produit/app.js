const express = require('express');
const app = express();
const bp = require('body-parser');
const produitRouter = require('./router/Produit');
app.use(bp.json());
app.use('/produits', produitRouter);




module.exports = app; 