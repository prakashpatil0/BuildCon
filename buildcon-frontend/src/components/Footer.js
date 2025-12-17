import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo10.png";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  // ✅ Scroll to top on every route change (inside footer)
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "Company", path: "/company" },
      { name: "Our Story", path: "/ourstory" },
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    projects: [
      { name: "All Projects", path: "/projects" },
      { name: "Completed", path: "/projects#completed" },
      { name: "Ongoing", path: "/projects#ongoing" },
      { name: "Upcoming", path: "/projects#upcoming" },
    ],
    resources: [
      { name: "Services", path: "/services" },
      { name: "Gallery", path: "/gallery" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy", isModal: true },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/MaaPranaam",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maapranaam_buildcon/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <footer className="relative bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* LOGO & DESCRIPTION */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <img src={Logo} alt="BuildCon Logo" className="h-14 w-auto" />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Building excellence across office parks, hospitality, and luxury
                residences. Creating spaces that inspire and transform
                communities.
              </p>
              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* COMPANY LINKS */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* PROJECTS LINKS */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">Projects</h3>
              <ul className="space-y-3">
                {footerLinks.projects.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* RESOURCES LINKS */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.isModal ? (
                      <button
                        onClick={() => setShowPrivacyPolicy(true)}
                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center group w-full text-left"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {link.name}
                        </span>
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* BOTTOM BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-slate-800"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Designed & Developed by MaaPranaam
                Buildcon PVT. LTD. All Rights Reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 bg-[#e3c472] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition"
              aria-label="Scroll to top"
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
      />
    </>
  );
};

export default Footer;
