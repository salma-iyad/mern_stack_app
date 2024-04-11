import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const connectToMongoDB = () => {
    fetch('http://localhost:3001/connect-mongodb')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => setMessage("Erreur lors de la connexion au serveur"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <button onClick={connectToMongoDB}>Connecter à MongoDB</button>
      </header>
    </div>
  );
}

export default App;
