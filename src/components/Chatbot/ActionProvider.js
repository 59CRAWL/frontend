import React, { useContext, useState } from 'react';
import { ShipContext } from 'src/context/shipContext';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const { ships } = useContext(ShipContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleQueries = async (prompt) => {
<<<<<<< HEAD

=======
    // Check if the message is empty and return early if it is.
    if (!prompt.trim()) {
      const emptyMessage = createChatBotMessage("Your message is empty.");
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, emptyMessage],
      }));
      return;
    }

    if (isLoading) {
      // If loading is in progress, prevent sending additional messages.
      return;
    }

    setIsLoading(true);
>>>>>>> 6f75ac3 (fix chatbot)
    let botMessage;

    if (!ships) {
      botMessage = createChatBotMessage("Please load a CSV file first.");
    }
    else {
      try {
        // Set a loading indicator while waiting for the response.
        botMessage = createChatBotMessage("Loading...");
        
        const response = await axios.post('http://127.0.0.1:5000/chat', {
          json: ships,
          prompt: prompt
        });

        let message = response.data.replace(/\n/g, '<br/>');

        const reactElement = (<div dangerouslySetInnerHTML={{ __html: message }} />);
        botMessage = createChatBotMessage(<>{reactElement}</>);

      } catch (error) {
<<<<<<< HEAD
        botMessage = createChatBotMessage("Chat API is not working, please configure your replicate API key.");
=======
        botMessage = createChatBotMessage("Chat API is not working, please configure your replicate API key.")
      } finally {
        setIsLoading(false);
>>>>>>> 6f75ac3 (fix chatbot)
      }
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleQueries,
          },
          isLoading,
        });
      })}
    </div>
  );
};

export default ActionProvider;
