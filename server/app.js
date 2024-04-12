require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);


const mongoUri = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongodb_server:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB server successfully.'))
.catch(err => console.error('Failed to connect to MongoDB server:', err));

app.get('/connect-mongodb', (req, res) => {
  if (mongoose.connection.readyState) {
    console.log('Connexion à MongoDB server réussie.');
    res.json({ message: 'Connexion à MongoDB server réussie.' });
  } else {
    console.error('Erreur de connexion à MongoDB server');
    res.status(500).json({ message: 'Erreur de connexion à MongoDB server' });
  }
});

app.post('/messages', async (req, res) => {
  const newMessage = new Message({
    text: req.body.text,
    timestamp: new Date() 
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Failed to save message:', error);
    res.status(500).json({ message: 'Failed to save message', error: error.message });
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 }); // This will return messages in descending order by timestamp
    res.json(messages);
  } catch (error) {
    console.error('Failed to retrieve messages:', error);
    res.status(500).json({ message: 'Failed to retrieve messages', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
