import React from "react";

import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import CTA from "./components/cta/cta";
import Services from "./components/services/services";
import Stats from "./components/stats/stats";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

import resumeData from "./resumeData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro resumeData={resumeData} />
      <About />
      <Resume />
      <Portfolio />
      <CTA />
      <Services />
      <Stats />
      <Contact />
      <Footer />
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
}

export default App;
