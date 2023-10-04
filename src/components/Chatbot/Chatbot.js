import { useContext, useState } from "react";
import { ShipContext } from "src/context/shipContext";

import styles from './Chatbot.module.scss';

const ChatbotLayout = () => {
  const [prompt, setPrompt] = useState('');
    const [botReply, setBotReply] = useState('');

    const { message } = useContext(ShipContext);

    let json;

    if (message) {
        json = JSON.stringify(message.slice(0, 20))
    }

    const handleChat = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/chat', {
                json: json,
                prompt: prompt
            });

            setBotReply(response.data);
        } catch (error) {
            setBotReply("Chat API is not working, please configure your replicate API key")
        }
    };
  return (
    <div className={styles.chatbotcontainer}>
      <h1 className={styles.cheader}>Welcome to PSA's Chat Bot! Ask any questions regarding the data!</h1>
      <div>
        <input
          className={styles.chatinput}
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type='submit' className='ttext' onClick={handleChat}>Send</button>
      </div>

      <p className='cbottext'>{botReply ? botReply : "Hi, please ask me any question regarding the dataset!"}</p>
    </div>
  );
};

export default ChatbotLayout;
