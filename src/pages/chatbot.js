import React, { useState } from 'react';
import axios from 'axios';

import { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';

function Chatbot() {
  const [prompt, setPrompt] = useState('');
  const [botReply, setBotReply] = useState('');

  const { message } =   useContext(ShipContext);

  const handleChat = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/chat', {
        json: message,
        prompt: prompt
      });

      setBotReply(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chat Bot</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handleChat}>Send</button>
      </div>
      <p>{botReply}</p>
    </div>
  );
}

export default Chatbot;