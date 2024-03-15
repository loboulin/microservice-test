const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

// Modifiez l'URI pour correspondre à votre configuration MongoDB locale

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

async function connectToDB() {
  const uri = "mongodb://mongo-server/commande/?retryWrites=true&w=majority";
  mongoose
  .connect(uri, {

    dbName: 'commande',
  })
 
  .then(() => console.log('Connexion à MongoDB réussie !',mongoose.connection.readyState))

  .catch(err => console.error(err));
}



module.exports = { connectToDB };
