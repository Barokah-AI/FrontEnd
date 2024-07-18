import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import ChatPage from "./pages/chatPage/ChatPage";
import SignInPage from "./pages/signin/SignIn";
import SignUpPage from "./pages/signup/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
