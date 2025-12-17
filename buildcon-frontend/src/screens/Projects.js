import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

// Import images
import picture1 from "../assets/picture1.webp";
import picture2 from "../assets/picture2.webp";
import picture3 from "../assets/picture3.webp";
import picture4 from "../assets/picture4.webp";  
import picture5 from "../assets/picture5.webp";
import picture6 from "../assets/picture6.webp";

// Import project images from assets folders
import shreeShrushtiImage from "../assets/Sai Shrushti/shree shrushti image.webp";
import shreeShrushtiSummary from "../assets/Sai Shrushti/Summary of Shree Shrushti.png";
import shreeShrushtiLayout1BHK from "../assets/Sai Shrushti/Flat Layout of Shree Shrushti (1 BHK).webp";
import shreeShrushtiLayout2BHK from "../assets/Sai Shrushti/Flat Layout Of Shree Shrushti (2 BHK).webp";
import saiDwarikaPhoto1 from "../assets/Sai Dwarika/Saidwarika Photo 1.webp";
import sadguruKrupaImage from "../assets/Shree Sadguru/Shree Sadguru Krupa.webp";
import vrindavanRegency1 from "../assets/Vrindavan/Vrindavan Regency 1.webp";
import saiNagari1 from "../assets/Sai Nagari/Sai Nagari 1.webp";
import maaPranaamHospitalImage from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Image.webp";
const projectData = {
  completed: [
    {
      name: "Shree Shrushti",
      location: "Yewalewadi/Kondhwa Budruk, Pune",
      mix: "1 & 2 BHK Residences",
      details: "Well-connected, peaceful community setting with essential amenities for daily life. Spread over 2 acres with 60+ units.",
      image: shreeShrushtiImage,
    },
    {
      name: "Sai Dwarika",
      location: "Yewalewadi / Kondhwa Budruk, Pune",
      mix: "1 & 2 BHK Residences",
      details: "Ready-to-move residential project with modern amenities. Well-connected option for homeowners in South Pune with easy access to key roads and daily conveniences.",
      image: saiDwarikaPhoto1,
    },
    {
      name: "Sadguru Krupa",
      location: "Katraj, Pune",
      mix: "3 & 4 BHK Premium Residences",
      details: "Ultra-luxury living in Pune's most prestigious neighborhood.",
      image: sadguruKrupaImage,
    },
    {
      name: "Vrindavan Regency",
      location: "Katraj - Kondhwa Road, Yewalewadi, Pune",
      mix: "1, 2 & 3 BHK Residences",
      details: "Ready-to-move complex with 2 towers, 100+ units spread over 3 acres. A convenient choice for comfortable housing in South Pune.",
      image: vrindavanRegency1,  
    },
    {
      name: "Sai Shraddha Pune",
      location: "Kondhwa Budruk, Yewalewadi, Pune",
      mix: "3 & 4 BHK Residences",
      details: "Affordable and high-quality living in a vibrant neighborhood.",
      image: picture4,  
    }
  ],
  ongoing: [
    {
      name: "Sai Nagari",
      location: "Katraj, Pune",
      mix: "6.75+ Million Sq. Ft. mixed-use",
      details: "Transit-oriented district with office, retail, and residences.",
      image: saiNagari1,
    },
    {
      name: "Maa Pranaam Hospitality",
      location: "Pune",
      mix: "Hospitality & Healthcare",
      details: "Premium hospitality and healthcare facility with world-class amenities and services.",
      image: maaPranaamHospitalImage,
    },
    {
      name: "Privillege Hills", 
      location: "Balewadi, Pune",
      mix: "Grade-A office park",
      details: "Integrated office campus with High Street retail spine.",
      image: picture5,
    },
    {
      name: "Sadguru Residency",
      location: "Yerwada, Pune",
      mix: "1.2M sq. ft. IT Park",
      details: "State-of-the-art technology hub with world-class amenities.",
      image: picture6,
    },
  ],
  upcoming: [
    {
      name: "Krushna Nagari",
      location: "Bandra West, Mumbai",
      mix: "3 & 4.5 BHK | ~65,800 sq. ft.",
      price: "INR 20 Cr* onwards",
      image: picture1,
    },
    {
      name: "Sai Galaxy",
      location: "Dubai Islands",
      mix: "3 & 4 BHK | ~180,000 sq. ft.",
      price: "4.2M AED* onwards",
      image: picture2,
    },
    {
      name: "Parkland Homes II",
      location: "Worli, Mumbai",
      mix: "4 & 5 BHK | ~85,000 sq. ft.",
      price: "INR 25 Cr* onwards",
      image: picture3,
    },
    {
      name: "Euphoric Blossoms",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,  
    },
    {
      name: "M24",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,
    },
    {
      name: "Sai Mantra",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,
    },
    {
      name: "Sai Shraddha Pune",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,
    },
    {
      name: "KBC Towers",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,
    },
    {
      name: "Sai Amrut",
      location: "pune",
      mix: "3 & 4 BHK Residences",
      price: "INR 20 Cr* onwards",
      image: picture4,  
    }
  ],
};

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Projects() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("completed");
  const completedRef = useRef(null);
  const ongoingRef = useRef(null);
  const upcomingRef = useRef(null);

  // Smooth scroll to section
  const scrollToSection = (section) => {
    setActiveSection(section);
    const refs = {
      completed: completedRef,
      ongoing: ongoingRef,
      upcoming: upcomingRef,
    };
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Parallax effect
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Handle project detail navigation
  const handleViewDetails = (projectName) => {
  if (projectName === "Sai Nagari") {
    navigate("/projects/sai-nagari");
  } else if (projectName === "Shree Shrushti") {
    navigate("/projects/shree-shrushti");
  } else if (projectName === "Vrindavan Regency") {
    navigate("/projects/vrindavan-regency");
  } else if (projectName === "Sai Dwarika") {
    navigate("/projects/sai-dwarika");
  } else if (projectName === "Maa Pranaam Hospitality") {
    navigate("/projects/maa-pranaam-hospitality");
  }

  // Navigate ke baad page ko top par le jaane ke liye
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  return (
    <div className="w-full bg-black min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={picture1}
            alt="Projects Hero"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 flex items-center justify-center text-center px-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4"
            >
              Projects Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-semibold mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
                Completed, Ongoing & Upcoming
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-[#f0d3a3] max-w-3xl mx-auto"
            >
              Premium locations in Pune, blending architecture,
              wellness, and hospitality partnerships.
            </motion.p>
          </div>
        </motion.div>

        {/* Navigation Menu - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex items-center justify-center gap-8 font-medium text-[#f0d9a3] tracking-wider text-lg">
            {[
              { label: "Completed", value: "completed" },
              { label: "Ongoing", value: "ongoing" },
              { label: "Upcoming", value: "upcoming" },
            ].map((item, index) => (
              <React.Fragment key={item.value}>
                {index > 0 && <span className="text-[#d1a75e] text-xl">|</span>}
                <motion.button
                  onClick={() => scrollToSection(item.value)}
                  whileHover={{ scale: 1.1, color: "#f9d891" }}
                  whileTap={{ scale: 0.95 }}
                  className={`transition-colors duration-300 px-4 ${
                    activeSection === item.value ? "text-[#f9d891]" : ""
                  }`}
                >
                  {item.label}
                </motion.button>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= COMPLETED PROJECTS ================= */}
      <section
        ref={completedRef}
        id="completed"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4"
          >
            Completed Projects
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-[#f7d69a] mb-4"
          >
            Our Legacy
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#d1a75e] text-lg max-w-2xl mx-auto"
          >
            Landmark projects that have transformed skylines and redefined
            luxury living.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.completed.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-black border border-[#d1a75e]/20"
            >
              <div className="relative h-[300px] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-[#f7d69a] mb-2"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-[#d1a75e]"
                  >
                    {project.location}
                  </motion.p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#f0d3a3] font-medium mb-2">{project.mix}</p>
                <p className="text-[#d1a75e] text-sm mb-4">{project.details}</p>
                <motion.button
                  onClick={() => handleViewDetails(project.name)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#f8d99c] font-semibold text-sm hover:text-[#f9d891] transition-colors flex items-center gap-2"
                  
                >
                  View Details
                  <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ONGOING PROJECTS ================= */}
      <section
        ref={ongoingRef}
        id="ongoing"
        className="bg-black py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4"
            >
              Ongoing Projects
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold text-[#f7d69a] mb-4"
            >
              In Development
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#d1a75e] text-lg max-w-2xl mx-auto"
            >
              Transforming visions into reality with cutting-edge design and
              sustainable practices.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.ongoing.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-2xl bg-black border border-[#d1a75e]/20"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#d1a75e]/30 backdrop-blur-sm border border-[#d1a75e]/50 rounded-full text-xs font-semibold text-[#f8d99c]">
                      ONGOING
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-semibold text-[#f7d69a] mb-2"
                    >
                      {project.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-sm text-[#d1a75e]"
                    >
                      {project.location}
                    </motion.p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#f0d3a3] font-medium mb-2">{project.mix}</p>
                  <p className="text-[#d1a75e] text-sm mb-4">{project.details}</p>
                  <motion.button
                    onClick={() => handleViewDetails(project.name)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#f8d99c] font-semibold text-sm hover:text-[#f9d891] transition-colors flex items-center gap-2"
                    
                  >
                    View Details
                    <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UPCOMING PROJECTS ================= */}
      <section
        ref={upcomingRef}
        id="upcoming"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4"
          >
            Upcoming Projects
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-[#f7d69a] mb-4"
          >
            Coming Soon
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#d1a75e] text-lg max-w-2xl mx-auto"
          >
            Future landmarks that will redefine luxury living and commercial
            excellence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.upcoming.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-black border border-[#d1a75e]/20"
            >
              <div className="relative h-[300px] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] backdrop-blur-sm border border-[#d1a75e]/50 rounded-full text-xs font-semibold text-white">
                    UPCOMING
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-[#f7d69a] mb-2"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-[#d1a75e]"
                  >
                    {project.location}
                  </motion.p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#f0d3a3] font-medium mb-2">{project.mix}</p>
                {project.price && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-[#f8d99c] font-semibold text-lg mb-4"
                  >
                    {project.price}
                  </motion.p>
                )}
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white font-semibold rounded-lg hover:from-[#b8924b] hover:to-[#d1a74f] transition-all"
                >
                  Enquire Now
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

