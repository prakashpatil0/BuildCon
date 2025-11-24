import { BrowserRouter as Router, Link, NavLink, Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Media from './screens/Media';
import Projects from './screens/Projects';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Projects',
    to: '/projects',
    children: [
      { label: 'Completed', to: '/projects#projects-completed' },
      { label: 'Ongoing', to: '/projects#projects-ongoing' },
      { label: 'Upcoming', to: '/projects#projects-upcoming' },
    ],
  },
  { label: 'Media', to: '/media' },
  { label: 'Contact', to: '/contact' },
];

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-transparent text-white backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <Link to="/" className="text-lg font-semibold tracking-[0.25em] uppercase text-white">
              BuildCon Realty
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navLinks.map((link) => (
                <div key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition hover:text-brand-200 ${isActive ? 'text-brand-200' : 'text-slate-200'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <div className="pointer-events-none absolute left-0 top-full mt-3 min-w-[180px] rounded-2xl bg-white p-3 text-slate-800 shadow-xl opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        >
                          {child.label}
                          <span aria-hidden>→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:border-white/70"
            >
              BuildCon Privilege
            </Link>
          </div>
        </header>

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} BuildCon Realty · Inspired by BuildCon&apos;s excellence across office
              parks, hospitality, data centres, and luxury residences.
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
