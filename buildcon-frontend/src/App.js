import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Media from "./screens/Media";
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import ServiceDetail from "./screens/ServiceDetail";
import ProjectDetail from "./screens/ProjectDetail";
import Company from "./screens/Company";
import Gallery from "./screens/Gallery";
import Careers from "./screens/Careers";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Ourstory from "./screens/ourstory";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourstory" element={<Ourstory />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />

            {/* Extra pages for dropdown */}
            <Route path="/leadership" element={<div>Leadership Page</div>} />
            <Route path="/team" element={<div>Team Page</div>} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
