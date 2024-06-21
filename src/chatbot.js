import React, { useState } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Maaf, saya belum bisa membalas.', sender: 'bot' }
      ]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
