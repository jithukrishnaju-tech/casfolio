import Analytics from "./components/Analytics";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteSlider from "./components/QuoteSlider ";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <QuoteSlider />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
