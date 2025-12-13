import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/mainlogo.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`
        fixed inset-x-0 top-0 z-50 
        transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg text-slate-900"
            : "bg-transparent text-white"
        }
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* LEFT — LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-auto transition-all duration-300"
            />
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          {/* HOME */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            whileHover={{ y: -2 }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative transition-colors duration-300 ${
                  isActive
                    ? isScrolled
                      ? "text-slate-900"
                      : "text-white"
                    : isScrolled
                    ? "text-slate-700 hover:text-slate-900"
                    : "text-white/90 hover:text-white"
                }`
              }
            >
              Home
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          </motion.div>

          {/* COMPANY DROPDOWN */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            className="relative group"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`inline-flex items-center gap-1 transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>Company</span>
              <motion.span
                className="text-xs mt-[2px]"
                animate={{ rotate: activeDropdown === "company" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full 
                    mt-4 min-w-[220px]
                    rounded-2xl 
                    bg-white/95 backdrop-blur-xl
                    border border-slate-200
                    shadow-[0_18px_45px_rgba(0,0,0,0.15)]
                    overflow-hidden
                    before:content-['']
                    before:absolute before:-top-4 before:left-0 before:right-0 before:h-4
                    before:bg-transparent
                  "
                >
                  <Link
                    to="/company"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Company
                  </Link>
                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/ourstory"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Our Story
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* PROJECTS DROPDOWN */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            className="relative group"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`inline-flex items-center gap-1 transition-colors duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>Projects</span>
              <motion.span
                className="text-xs mt-[2px]"
                animate={{ rotate: activeDropdown === "projects" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence>
              {activeDropdown === "projects" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full 
                    mt-4 min-w-[220px]
                    rounded-2xl 
                    bg-white/95 backdrop-blur-xl
                    border border-slate-200
                    shadow-[0_18px_45px_rgba(0,0,0,0.15)]
                    overflow-hidden
                    before:content-['']
                    before:absolute before:-top-4 before:left-0 before:right-0 before:h-4
                    before:bg-transparent
                  "
                >
                  <Link
                    to="/projects#completed"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Completed
                  </Link>
                  <Link
                    to="/projects#ongoing"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Ongoing
                  </Link>
                  <Link
                    to="/projects#upcoming"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Upcoming
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* OTHER MENU ITEMS */}
          {["Services", "Gallery", "Careers", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              custom={index + 3}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ y: -2 }}
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive
                      ? isScrolled
                        ? "text-slate-900"
                        : "text-white"
                      : isScrolled
                      ? "text-slate-700 hover:text-slate-900"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-current"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
              ${
                isScrolled
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              }
            `}
          >
            Enquire
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          className={`
            lg:hidden flex flex-col gap-1.5 p-2
            ${isScrolled ? "text-slate-900" : "text-white"}
          `}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-current"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current"
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-current"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`
              lg:hidden overflow-hidden
              ${isScrolled ? "bg-white" : "bg-slate-900/95 backdrop-blur-xl"}
            `}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={`py-2 text-lg font-medium transition-colors ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Home
              </NavLink>

              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "company-mobile" ? null : "company-mobile"
                    )
                  }
                  className={`w-full flex items-center justify-between py-2 text-lg font-medium ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  Company
                  <span
                    className={`transition-transform ${
                      activeDropdown === "company-mobile" ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {activeDropdown === "company-mobile" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/company"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      Company
                    </Link>
                    <Link
                      to="/about"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/ourstory"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      Our Story
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "projects-mobile" ? null : "projects-mobile"
                    )
                  }
                  className={`w-full flex items-center justify-between py-2 text-lg font-medium ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  Projects
                  <span
                    className={`transition-transform ${
                      activeDropdown === "projects-mobile" ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {activeDropdown === "projects-mobile" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/projects#completed"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      Completed
                    </Link>
                    <Link
                      to="/projects#ongoing"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      Ongoing
                    </Link>
                    <Link
                      to="/projects#upcoming"
                      onClick={closeMobileMenu}
                      className={`block py-2 text-base transition-colors ${
                        isScrolled ? "text-slate-700" : "text-white/80"
                      }`}
                    >
                      Upcoming
                    </Link>
                  </div>
                )}
              </div>

              {["Services", "Gallery", "Careers", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className={`py-2 text-lg font-medium transition-colors ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  {item}
                </NavLink>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`mt-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? "bg-slate-900 text-white"
                    : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
                }`}
                onClick={closeMobileMenu}
              >
                Enquire
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
