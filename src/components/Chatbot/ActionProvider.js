// in ActionProvider.jsx
import React, { useContext } from 'react';
import { ShipContext } from 'src/context/shipContext';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { ships } = useContext(ShipContext);

  const handleQueries = async (prompt) => {
    
    let botMessage;

    if (!ships) {
      botMessage = createChatBotMessage("Please load a CSV file first.");
    }
    else {
      try {
        const response = await axios.post('http://127.0.0.1:5000/chat', {
          json: ships,
          prompt: prompt
        });
  
        botMessage = createChatBotMessage(response.data);
      } catch (error) {
        botMessage = createChatBotMessage("Chat API is not working, please configure your replicate API key.")
      }
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleQueries,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;