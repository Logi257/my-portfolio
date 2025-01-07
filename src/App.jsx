import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certification />
        <Contact />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
