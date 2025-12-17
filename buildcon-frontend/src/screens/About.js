import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ===== IMAGES =====
import heroImg from "../assets/picture1.webp";
import profileImg from "../assets/picture2.webp";
import leader1 from "../assets/picture4.webp";
import leader2 from "../assets/picture5.webp";
import worldMap from "../assets/picture6.webp";

// ===== CLIENT LOGOS (FIXED IMPORTS) =====
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import skl_logo from "../assets/skl_logo.png";
import ms_logo from "../assets/ms_logo.png";
import ksb_logo from "../assets/ksb_logo.png";
import ksrl_logo from "../assets/ksrl_logo.png";
import tre_logo from "../assets/tre_logo.png";

const clients = [skl_logo, ms_logo, ksb_logo, ksrl_logo, tre_logo];

// Golden color palette
const goldenColors = {
  light: "#f9d891",
  medium: "#d1a74f",
  dark: "#b8924b",
  gradient: "from-[#f9d891] to-[#d1a74f]",
  text: "#f8d99c",
  textLight: "#f3dfb4",
  textMedium: "#f0d3a3",
  border: "#d1a75e",
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

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
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

const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const About = () => {
  // SCROLL TARGETS
  const profileRef = useRef(null);
  const growthRef = useRef(null);
  const clientsRef = useRef(null);
  const partnersRef = useRef(null);

  // PARALLAX
  const { scrollYProgress } = useScroll({
    target: profileRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  // SMOOTH SCROLL FUNCTION
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 font-light">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl tracking-wide font-semibold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              Building Legacies
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-gray-800 text-lg tracking-wide font-medium"
          >
            Shaping Skylines. Crafting Experiences.
          </motion.p>
        </motion.div>

        {/* MENU — ON CLICK SCROLL */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl"
        >
          <div className="w-full border-t border-[#c8a86a]/50 mb-6"></div>

          <div className="flex justify-center gap-12 font-medium text-[#f0d9a3] tracking-wider text-lg">
            {[
              { label: "Profile", ref: profileRef },
              { label: "Growth Chronicles", ref: growthRef },
              { label: "Clients", ref: clientsRef },
              { label: "Partnerships", ref: partnersRef },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <span className="text-[#d1a75e]">|</span>}
                <motion.button
                  onClick={() => scrollToSection(item.ref)}
                  whileHover={{ scale: 1.1, color: "#f9d891" }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          COMPANY PROFILE — CLEAN LEFT→RIGHT
      ============================================================ */}
      <section
        ref={profileRef}
        className="max-w-6xl mx-auto px-6 py-24 overflow-hidden bg-white"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: false }}
          className="text-center text-5xl font-semibold mb-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]"
        >
          COMPANY PROFILE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE — SLIDE LEFT TO RIGHT WITH ANIMATION */}
          <motion.div
            style={{ y: parallaxY }}
            initial={{ x: -200, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl"
          >
            <motion.img
              src={profileImg}
              alt="Company Profile"
              className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(217,167,79,0.3)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-semibold text-[#f3dfb4] mb-6"
            >
              Who We Are
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-gray-800 leading-relaxed mb-6 text-lg"
            >
              At MAA PRANAAM GROUP, we don’t just build homes and offices — we create entire worlds that redefine the way people live, work, and play. Every project we undertake is shaped by thoughtful, modern design that captures the true essence of contemporary living.
Driven by a passion to elevate real estate standards in the region, we are committed to delivering excellence across every development. Over the coming years, MAA PRANAAM GROUP aims to develop 1M+ sq. ft. of residential and commercial spaces in and around Pune, setting new benchmarks for quality, innovation, and customer satisfaction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-[#f0d3a3] leading-relaxed text-lg"
            >
              We believe in building more than structures — we build experiences, lifestyles, and lasting value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          GROWTH CHRONICLES
      ============================================================ */}
      <section ref={growthRef} className="bg-gradient-to-br from-[#faf9f6] to-white py-24 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-5xl font-semibold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]"
        >
          GROWTH CHRONICLES
        </motion.h2>

        <div className="max-w-5xl mx-auto relative border-l-2 border-[#d1a75e]/50 pl-10">
          {[
            { year: "2014", title: "Founding of Maa Pranaam Buildcon", desc: "The beginning of a premium real-estate journey." },
            { year: "2018", title: "National Expansion", desc: "Expanded into major metros & commercial hubs across India." },
            { year: "2022", title: "Global Recognition", desc: "Achieved global excellence in engineering & design." },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.1, type: "spring" }}
                className="absolute -left-4 w-7 h-7 rounded-full bg-gradient-to-br from-[#f3d59e] to-[#b8924b] shadow-lg shadow-[#d1a75e]/50"
              />
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="text-xl font-semibold mb-2 text-gray-900"
              >
                {item.year} — {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-[#d1a75e]"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-5xl font-semibold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]"
        >
          LEADERSHIP
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">
          {[
            { img: leader1, name: "Mr. Vishal Pawar", role: "Founder & Chairman" },
            { img: leader2, name: "Chief Executive", role: "Chief Executive Officer" },
          ].map((leader, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                className="overflow-hidden rounded-xl shadow-xl shadow-[#d1a75e]/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={leader.img}
                  className="w-full h-[420px] object-cover"
                  alt={leader.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-2xl mt-4 text-[#f7e3b2]"
              >
                {leader.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className="text-[#d1a75e] mt-2"
              >
                {leader.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* ============================================================
          GLOBAL PRESENCE
      ============================================================ */}
      <section className="bg-gradient-to-br from-[#faf9f6] to-white py-24 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-5xl font-semibold text-[#f3dca5] mb-14"
        >
          GLOBAL PRESENCE
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.img
            src={worldMap}
            className="w-full h-auto rounded-xl shadow-lg shadow-[#d1a75e]/20"
            alt="Global Presence Map"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </section> */}

      {/* ============================================================
          CLIENTS GRID
      ============================================================ */}
      <section ref={clientsRef} className="max-w-6xl mx-auto px-6 py-24 bg-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-5xl mb-16 text-[#f7d79f]"
        >
          OUR CLIENTS
        </motion.h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-10 place-items-center">
    {clients.map((logo, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 28, scale: 0.92, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          delay: idx * 0.08,
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -10,
          scale: 1.06,
          rotate: -1,
        }}
        whileTap={{ scale: 0.98 }}
        className="
          group relative flex items-center justify-center
          w-full
        "
      >
        {/* Premium glass card */}
        <div
          className="
            relative flex items-center justify-center
            rounded-2xl
            px-4 py-5
            bg-white/5 border border-white/10
            shadow-[0_18px_45px_rgba(0,0,0,0.7)]
            transition-all duration-300
            group-hover:border-[#e3c472]/40
            group-hover:bg-white/8
            overflow-hidden
          "
        >
          {/* subtle glow on hover */}
          <div
            className="
              absolute -inset-10 opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-[radial-gradient(circle,rgba(227,196,114,0.18)_0%,rgba(0,0,0,0)_60%)]
            "
          />

          <motion.img
            src={logo}
            alt={`Client Logo ${idx + 1}`}
            className="
              relative z-10
              h-32 md:h-36 w-auto object-contain
              opacity-90 group-hover:opacity-100
              drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]
              transition-all duration-300
            "
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* ============================================================
          PARTNERSHIPS
      ============================================================ */}
      <section ref={partnersRef} className="bg-gradient-to-br from-[#faf9f6] to-white py-20 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-semibold text-[#f5dba8] mb-6"
        >
          STRATEGIC PARTNERSHIPS
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-[#d1a75e] text-lg leading-relaxed"
        >
          We collaborate with world-class architects, engineering firms, and
          global design leaders to deliver unmatched quality & innovation.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
