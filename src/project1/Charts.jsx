import React, { useState } from 'react';

function Charts() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleNewMessage = async (message) => {
    setChatHistory([...chatHistory, { sender: "user", message }]);
    
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.chatgpt.com/v1/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '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'
  },
  body: JSON.stringify({ message })
});

const data = await response.json();
const botResponse = data.response;
setChatHistory([...chatHistory, { sender: "bot", message: botResponse }]);
      // const data = await response.json();
      // const botResponse = data.response;
    
      setChatHistory([...chatHistory, { sender: "bot", message: botResponse }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setChatHistory([...chatHistory, { sender: "user", message }]);
    handleNewMessage(message);
    event.target.elements.message.value = '';
  }

  return (
    <div>
      <h1>ChatBot</h1>
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Type your message here..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Charts;
