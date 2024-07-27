import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useConversations = () => {
  const api =
    "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/chat";

  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const authToken = Cookies.get("authToken");

  const handleSubmit = async (question) => {
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
          Authorization: `Bearer ${authToken}`, // Add auth token to headers if available
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
        setQuestionCount((prev) => prev + 1);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        setConversations((prev) =>
          prev.map((conv, index) =>
            index === prev.length - 1
              ? { ...conv, answer: "Aku gak ngerti,coba tanya yang lain" }
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
  };
};

export default useConversations;
