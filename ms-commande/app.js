const express = require('express');
const app = express();
const bp = require('body-parser');
const commandeRouter = require('./router/Commande');
app.use(bp.json());
app.use('/commande', commandeRouter);





module.exports = app; 