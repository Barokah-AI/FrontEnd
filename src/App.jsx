import React from 'react';
import Chatbot from './chatbot';
import Sidebar from './sidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Chatbot />
    </div>
  );
}

export default App;
