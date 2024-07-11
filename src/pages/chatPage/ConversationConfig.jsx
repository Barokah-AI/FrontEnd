import { useState, useEffect } from "react";

const useConversations = () => {
  const api =
    "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/chat";

  const [input, setInput] = useState("");
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyPress = (event) => {
    const question = input.trim();
    if (event.key === "Enter" && question) {
      setConversations((prev) => [...prev, { question, answer: null }]);
      setIsLoading(true);
      setInput("");
      handleSubmit(question);
    }
  };

  const handleSubmit = async (question) => {
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
    handleKeyPress,
    handleSubmit,
  };
};

export default useConversations;