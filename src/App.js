import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUps from "./components/scrollup/ScrollUps";


function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About  />
        <Skills />
        <Qualification />
        <Work />
        <Contact/>
      </main>
      <Footer/>
      <ScrollUps/>
    </div>
  );
}

export default App;
