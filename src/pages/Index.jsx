import React from "react";
import ScrollUp from "../components/ScrollUp";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Brands from "../components/Brands";
import AboutSectionOne from "../components/AboutSectionOne";
import AboutSectionTwo from "../components/AboutSectionTwo";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Brands />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
