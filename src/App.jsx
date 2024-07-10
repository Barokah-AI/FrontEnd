import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import ChatPage from "./pages/chatPage/ChatPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default App;
