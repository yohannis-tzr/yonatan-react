import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return( <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />

  </div>
  

  );
}

export default App
 
