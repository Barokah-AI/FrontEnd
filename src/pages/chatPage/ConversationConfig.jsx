import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useConversations = () => {
  const api =
    "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/chat";

  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(
    parseInt(Cookies.get("questionCount")) || 0
  );

  const authToken = Cookies.get("authToken");

  useEffect(() => {
    if (authToken) {
      // Jika pengguna sudah login, reset questionCount
      setQuestionCount(0);
      Cookies.remove("questionCount");
    }
  }, [authToken]);

  const handleSubmit = async (question) => {
    // Check if user is not logged in and question count is >= 3
    if (!authToken && questionCount >= 3) {
      console.warn("Sudah mencapai batas pertanyaan");
      return;
    }

    setConversations((prev) => [...prev, { question, answer: null }]);
    setIsLoading(true);
    setInput("");
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: question }),
      });

      if (res.ok) {
        const data = await res.json();
        setTimeout(() => {
          setConversations((prev) =>
            prev.map((conv, index) =>
              index === prev.length - 1
                ? { ...conv, answer: data.response }
                : conv
            )
          );
        }, 1000);
        setQuestionCount((prev) => {
          const newCount = prev + 1;
          if (!authToken) {
            Cookies.set("questionCount", newCount, { expires: 1, path: "/" });
          }
          return newCount;
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        setConversations((prev) =>
          prev.map((conv, index) =>
            index === prev.length - 1
              ? { ...conv, answer: "Aku gak ngerti, coba tanya yang lain" }
              : conv
          )
        );
      }, 1000);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const startNewConversation = () => {
    setConversations([]);
    setQuestionCount(0);
    if (!authToken) {
      Cookies.remove("questionCount");
    }
  };

  const scrollBottom = () => {
    const chat = document.getElementById("scroll-bottom");
    window.scrollTo(0, chat.scrollHeight);
  };

  useEffect(() => {
    scrollBottom();
  }, [conversations]);

  return {
    input,
    isLoading,
    setInput,
    conversations,
    handleSubmit,
    questionCount,
    startNewConversation,
  };
};

export default useConversations;
