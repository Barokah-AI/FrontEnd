import React from "react";
import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import ChatPage from "./pages/chatPage/ChatPage";
import AboutPage from "./pages/about/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import FeaturesPage from "./pages/features/FeaturesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default App;
