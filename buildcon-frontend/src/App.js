import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Media from "./screens/Media";
import Projects from "./screens/Projects";
import Navbar from "./components/navbar";
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
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ourstory" element={<Ourstory />} />

            {/* Extra pages for dropdown */}
            <Route path="/leadership" element={<div>Leadership Page</div>} />
            <Route path="/team" element={<div>Team Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/gallery" element={<div>Gallery Page</div>} />
            <Route path="/careers" element={<div>Careers Page</div>} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} BuildCon Realty · Inspired by
              excellence across office parks, hospitality, and luxury
              residences.
            </p>

            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-slate-900">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
