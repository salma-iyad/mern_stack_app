import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to fetch messages
  const fetchMessages = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/messages`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error("Failed to load messages:", error));
  };

  // Function to add a new message
  const addMessage = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: message })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Message added:', data);
      setMessage('');
      fetchMessages();  // Reload messages after adding
    })
    .catch(error => console.error("Failed to add message:", error));
  };

  // Effect to load messages initially and refresh list
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={addMessage}>Add Message</button>
        <div>
          {messages.map(msg => (
            <p key={msg._id}>{msg.text}</p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
