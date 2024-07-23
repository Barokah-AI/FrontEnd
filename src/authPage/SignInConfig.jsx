import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed. Please try again.");
    }

    Cookies.set("authToken", data.token, { expires: 1 });

    return data;
  } catch (error) {
    throw new Error(error.message || "An error occurred. Please try again.");
  }
};

const useHandleSignin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async (e, email, password) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/chat");
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleSignin, loading, error, showModal };
};

export default useHandleSignin;