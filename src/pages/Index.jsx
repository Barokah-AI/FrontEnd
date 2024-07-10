import React, { useEffect } from "react";
import ScrollUp from "../components/ScrollUp";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Brands from "../components/Brands";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  // const api =
  //   "https://asia-southeast2-erditona-dev.cloudfunctions.net/barokahai/chat";

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     try {
  //       const res = await fetch(api, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ prompt: "Hello" }),
  //       });

  //       if (res.ok) {
  //         const data = await res.json();
  //         console.log(data);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchAPI();
  // }, []);

  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <About />
      <Brands />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
