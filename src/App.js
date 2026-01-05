import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Experience from "./components/experience";

function App() {
  useEffect(() => {
    document.title = "Zain Iqbal - Flutter Developer | Full-Stack Engineer";
  }, []);

  return (
    <>
      <a href="#home" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
