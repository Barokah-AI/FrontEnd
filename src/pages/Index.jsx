import ScrollUp from "../components/ScrollUp";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop";
import Features from "../components/Features";
import About from "../components/About";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ScrollUp />
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <Footer />
      <div className="fixed bottom-8 right-8 z-[99]">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
