import React, { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faRobot, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the desired icons

function ChatbotAI() {
  const [showChatbot, setShowChatbot] = useState(false);
  // const [chatMessages, setChatMessages] = useState([]);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  //  // Load chat history from local storage on component mount
  //  useEffect(() => {
  //   // Add the initial message to chatMessages
  //   const initialMessage = config.initialMessages[0];
  //   if (initialMessage) {
  //     setChatMessages([initialMessage]);
  //   }
  // }, []);

  // // Function to add messages to chat history
  // const addMessage = (message) => {
  //   setChatMessages((prevMessages) => [...prevMessages, message]);
  // };


  return (
    <div 
        className="chatbot-container" 
        style={{ position: "fixed", bottom: "100px", right: "50px", zIndex: "1000" }}
    >
      {showChatbot && (
        <div className="chatbot-wrapper">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            // messageHistory={chatMessages}
            messageParser={MessageParser}
            // actionProvider={(props) => (
            //   // Pass the addMessage function to ActionProvider
            //   <ActionProvider {...props} addMessage={addMessage} />
            // )}
            />
        </div>
      )}

      <div
        className={`chatbot-toggle-icon ${showChatbot ? "active" : ""}`}
        onClick={toggleChatbot}
        style={{
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "50px",
          transition: "background-color 0.3s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showChatbot ? (
          <>
            <FontAwesomeIcon icon={faTimes} width={15} />
            <span style={{ marginRight: "5px" }}> ‎ Close Chatbot</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCommentDots} style={{ transform: "scaleX(-1)" }} width={20} />
            <span style={{ marginLeft: "5px" }}>‎ Chatbot</span>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatbotAI;
