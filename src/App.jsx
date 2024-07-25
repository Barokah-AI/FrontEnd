import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./authPage/SignIn";
import SignUp from "./authPage/SignUp";
import ChatPage from "./pages/chatPage/ChatPage";
import NotFound from "./components/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
