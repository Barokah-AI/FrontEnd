import React from 'react';
import './App.css';
import Chatbot from './chatbot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Chatbot Sederhana</h1>
      </header>
      <main>
        <Chatbot />
      </main>
      <footer className="App-footer">
        <p>© 2024 Barokah Chatbot AI . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
