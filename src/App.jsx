import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import ChatPage from "./pages/chatPage/ChatPage";
import SigninPage from "./authPage/SignIn";
import SignupPage from "./authPage/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default App;
