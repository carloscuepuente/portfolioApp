import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen  bg-darkBlue">
        {/* Navegación */}
        {/* <Navigation /> */}

        {/* Contenido principal con rutas */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Pie de página */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
