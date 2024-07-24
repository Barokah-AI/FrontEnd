import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const signupUser = async (namalengkap, email, password, confirmpass) => {
  try {
    const response = await fetch(
      "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ namalengkap, email, password, confirmpass }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Signup failed. Please try again.");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "An error occurred. Please try again.");
  }
};

const useHandleSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e, namalengkap, email, password, confirmpass) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signupUser(namalengkap, email, password, confirmpass);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignup, loading, error, showModal };
};

export default useHandleSignup;
