import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="px-2 md:px-0">
        <Navigation />
        <Header />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
