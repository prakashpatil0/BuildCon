import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ===== IMAGES =====
import heroImg from "../assets/picture1.jpg";
import profileImg from "../assets/picture2.jpg";
import leader1 from "../assets/picture4.jpg";
import leader2 from "../assets/picture5.jpg";
import worldMap from "../assets/picture6.jpg";

// ===== CLIENT LOGOS (FIXED IMPORTS) =====
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

const clients = [logo1, logo2, logo3, logo1, logo2];

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
    <div className="w-full bg-[#0f0f0f] text-white font-light">

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
          <h1 className="text-6xl tracking-wide font-semibold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              Building Legacies
            </span>
          </h1>
          <p className="text-gray-200 text-lg tracking-wide">
            Shaping Skylines. Crafting Experiences.
          </p>
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
            <button onClick={() => scrollToSection(profileRef)} className="hover:text-white">
              Profile
            </button>

            <span>|</span>

            <button onClick={() => scrollToSection(growthRef)} className="hover:text-white">
              Growth Chronicles
            </button>

            <span>|</span>

            <button onClick={() => scrollToSection(clientsRef)} className="hover:text-white">
              Clients
            </button>

            <span>|</span>

            <button onClick={() => scrollToSection(partnersRef)} className="hover:text-white">
              Partnerships
            </button>
          </div>
        </motion.div>
      </section>

      {/* ============================================================
          COMPANY PROFILE — CLEAN LEFT→RIGHT
      ============================================================ */}
      <section
        ref={profileRef}
        className="max-w-6xl mx-auto px-6 py-24 overflow-hidden"
      >
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: false }}
          className="text-center text-5xl font-semibold mb-16 tracking-wide text-[#f8d99c]"
        >
          COMPANY PROFILE
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE — SLIDE LEFT TO RIGHT */}
          <motion.img
            src={profileImg}
            alt=""
            style={{ y: parallaxY }}
            className="rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-3xl font-semibold text-[#f3dfb4] mb-6">
              Who We Are
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              A pioneering developer redefining luxury, innovation and global
              architecture. We craft futuristic environments that stand as
              timeless icons in modern India.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Sustainability, design intelligence, and unmatched craftsmanship
              remain the foundation of our legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          GROWTH CHRONICLES
      ============================================================ */}
      <section ref={growthRef} className="bg-[#151515] py-24 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-5xl font-semibold mb-20 text-[#f7d69a]"
        >
          GROWTH CHRONICLES
        </motion.h2>

        <div className="max-w-5xl mx-auto relative border-l-2 border-[#d1a75e]/50 pl-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="mb-16">
            <div className="absolute -left-4 w-7 h-7 rounded-full bg-gradient-to-br from-[#f3d59e] to-[#b8924b]"></div>
            <h3 className="text-xl font-semibold mb-2 text-[#f0d3a3]">2002 — Foundation</h3>
            <p className="text-gray-400">The beginning of a premium real-estate journey.</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="mb-16">
            <div className="absolute -left-4 w-7 h-7 rounded-full bg-gradient-to-br from-[#f3d59e] to-[#b8924b]"></div>
            <h3 className="text-xl font-semibold mb-2 text-[#f0d3a3]">2010 — National Expansion</h3>
            <p className="text-gray-400">Expanded into major metros & commercial hubs across India.</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <div className="absolute -left-4 w-7 h-7 rounded-full bg-gradient-to-br from-[#f3d59e] to-[#b8924b]"></div>
            <h3 className="text-xl font-semibold mb-2 text-[#f0d3a3]">2020 — Global Recognition</h3>
            <p className="text-gray-400">Achieved global excellence in engineering & design.</p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center text-5xl font-semibold mb-20 text-[#f7d69a]"
        >
          LEADERSHIP
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center">
            <img src={leader1} className="w-full h-[420px] object-cover rounded-xl shadow-xl" alt="" />
            <h3 className="text-2xl mt-4 text-[#f7e3b2]">Mr. Vishal Pawar</h3>
            <p className="text-gray-400">Founder & Chairman</p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="text-center">
            <img src={leader2} className="w-full h-[420px] object-cover rounded-xl shadow-xl" alt="" />
            <h3 className="text-2xl mt-4 text-[#f7e3b2]"></h3>
            <p className="text-gray-400">Chief Executive Officer</p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          GLOBAL PRESENCE
      ============================================================ */}
      <section className="bg-[#151515] py-24 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center text-5xl font-semibold text-[#f3dca5] mb-14"
        >
          GLOBAL PRESENCE
        </motion.h2>

        <motion.img
          src={worldMap}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="max-w-5xl mx-auto rounded-xl shadow-lg"
          alt=""
        />
      </section>

      {/* ============================================================
          CLIENTS GRID
      ============================================================ */}
      <section ref={clientsRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center text-5xl mb-16 text-[#f7d79f]"
        >
          OUR CLIENTS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 place-items-center">
          {clients.map((logo, idx) => (
            <motion.img
              key={idx}
              src={logo}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="h-20 opacity-70 hover:opacity-100 transition"
              alt=""
            />
          ))}
        </div>
      </section>

      {/* ============================================================
          PARTNERSHIPS
      ============================================================ */}
      <section ref={partnersRef} className="bg-black py-20 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-semibold text-[#f5dba8] mb-6"
        >
          STRATEGIC PARTNERSHIPS
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          We collaborate with world-class architects, engineering firms, and
          global design leaders to deliver unmatched quality & innovation.
        </motion.p>
      </section>
    </div>
  );
};

export default About;
