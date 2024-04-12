require('dotenv').config({path: '../.env'}); // Only necessary if using a .env file locally
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

app.get('/connect-mongodb', (req, res) => {
  const mongoUri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}` +
                   `@mongodb_server:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}` +
                   `?authSource=admin`; // Adjust the authSource as needed

  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connexion à MongoDB réussie.');
    res.json({ message: 'Connexion à MongoDB réussie.' });
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB:', err);
    res.status(500).json({ message: 'Erreur de connexion à MongoDB', erreur: err.message });
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
