import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoutes";

import Index from "./pages/Index";
import ChatPage from "./pages/chatPage/ChatPage";
import SigninPage from "./authPage/SignIn";
import SignupPage from "./authPage/SignUp";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
