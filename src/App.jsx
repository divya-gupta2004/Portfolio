import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import Achievements from "./components/Achievements";


function App() {
  return (
    <>
      <Loader />
      <div className="bg-white dark:bg-gray-950 text-black dark:text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}


export default App;