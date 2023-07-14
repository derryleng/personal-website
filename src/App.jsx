import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navigation />
      <div className="px-2 md:px-0">
        <Header />
        <Portfolio />
        <Timeline />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
