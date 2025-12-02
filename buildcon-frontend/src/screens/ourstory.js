import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// IMAGES
import banner from "../assets/picture1.jpg";
import storyImg1 from "../assets/picture2.jpg";
import storyImg2 from "../assets/picture4.jpg";
import parallaxImg from "../assets/picture5.jpg";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const Ourstory = () => {
  const parallaxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);

  return (
    <div className="w-full bg-[#0f0f0f] text-white font-light">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center"
        >
          <h1 className="text-6xl font-semibold tracking-wide mb-4">
            <span className="bg-gradient-to-r from-[#f8d99c] to-[#d1a75e] text-transparent bg-clip-text">
              Our Story
            </span>
          </h1>
          <p className="text-gray-200 text-lg tracking-wide">
            A Journey of Passion, Precision & Purpose.
          </p>
        </motion.div>
      </section>

      {/* ============================================================
          SECTION 1 — ORIGIN STORY
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-semibold text-[#f8d99c] mb-6">
              Where It All Began
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Built on a foundation of integrity and vision, our journey began
              with a belief — that spaces should not just exist, they should
              inspire. Every brick we lay is shaped with craftsmanship,
              innovation, and trust.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              From humble beginnings to becoming a symbol of premium living
              & commercial excellence, our story is woven through years of
              commitment and authenticity.
            </p>
          </motion.div>

          <motion.img
            src={storyImg1}
            className="rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            alt=""
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ============================================================
          PARALLAX STORY IMAGE
      ============================================================ */}
      <section ref={parallaxRef} className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={parallaxImg}
          style={{ y: parallaxY }}
          className="w-full h-full object-cover opacity-80"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
      </section>

      {/* ============================================================
          SECTION 2 — MISSION & VISION
      ============================================================ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center text-5xl font-semibold text-[#f7d69a] mb-16"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible">
            <h3 className="text-3xl mb-4 text-[#f3dfb4]">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To craft world-class spaces that elevate lifestyles and blend
              modern design with timeless values.
            </p>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible">
            <h3 className="text-3xl mb-4 text-[#f3dfb4]">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the most trusted and admired brand in real estate —
              where every customer finds unmatched quality and belonging.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          KEY FACTS — BLACK THEME (LODHAA STYLE)
      ============================================================ */}
      <section className="bg-[#05060a] py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* TOP HEADING */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-xs tracking-[3px] text-[#d6b86a] mb-2"
          >
            KEY FACTS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center text-3xl md:text-4xl font-serif text-white mb-20"
          >
            Delivering excellence with continued growth
          </motion.h2>

          {/* MAIN 3-COLUMN STRUCTURE */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">

            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center md:items-end pr-0 md:pr-10">

              {/* Homes Delivered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-16"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-[#e0c474]">
                  65,000+
                </h3>
                <p className="text-sm text-[#d6b86a] leading-tight">
                  Homes<br />delivered^
                </p>
              </motion.div>

              {/* PRESENCE IN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-center md:text-right"
              >
                <p className="text-xs tracking-[2px] text-[#d6b86a] mb-3">
                  PRESENCE IN
                </p>
                <p className="text-sm leading-relaxed text-gray-200">
                  Mumbai, Thane, Pune,<br />
                  Bengaluru and London
                </p>
              </motion.div>

            </div>

            {/* VERTICAL DIVIDER (FULL HEIGHT, CENTER) */}
            <div className="hidden md:flex justify-center items-stretch">
              <div className="w-px bg-gradient-to-b from-transparent via-[#3b3521] to-transparent" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col items-center md:items-start pl-0 md:pl-10 mt-16 md:mt-0">

              {/* 44 Years */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-16"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-[#e0c474]">
                  44
                </h3>
                <p className="text-sm leading-tight text-gray-200">
                  Year legacy of<br />shaping real estate
                </p>
              </motion.div>

              {/* 40 Projects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.05 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-16"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-[#e0c474]">
                  40
                </h3>
                <p className="text-sm leading-tight text-gray-200">
                  operating<br />projects*
                </p>
              </motion.div>

              {/* 100 MN SQ FT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-[#e0c474]">
                  100
                </h3>
                <p className="text-sm leading-tight text-gray-200">
                  mn. Sq. ft. area<br />delivered
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          LEADERSHIP SECTION — BLACK THEME
      ============================================================ */}
      <section className="bg-[#050816] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm tracking-[3px] text-[#e3c472] mb-3"
          >
            WHO WE ARE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-14"
          >
            Guided by visionary leadership
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-[#111111] shadow-[0_18px_45px_rgba(0,0,0,0.8)] p-14 border border-white/10 rounded-xl text-center hover:border-[#e3c472] hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)] transition"
            >
              <h3 className="text-2xl font-serif text-[#f8e9bf] mb-3">
                Board of Directors
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Experienced industry leaders ensuring we grow our positive impact.
              </p>

              <button
                className="
                  px-10 py-2 
                  text-[#fefaf0] 
                  border border-[#e3c472] 
                  rounded-md 
                  hover:bg-[#e3c472] hover:text-black 
                  transition-all duration-300
                "
              >
                View
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-[#111111] shadow-[0_18px_45px_rgba(0,0,0,0.8)] p-14 border border-white/10 rounded-xl text-center hover:border-[#e3c472] hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)] transition"
            >
              <h3 className="text-2xl font-serif text-[#f8e9bf] mb-3">
                Leadership Team
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                A motivated and passionate team with a commitment to excellence.
              </p>

              <button
                className="
                  px-10 py-2 
                  text-[#fefaf0] 
                  border border-[#e3c472] 
                  rounded-md 
                  hover:bg-[#e3c472] hover:text-black 
                  transition-all duration-300
                "
              >
                View
              </button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ============================================================
          CTA FOOTER
      ============================================================ */}
      <section className="bg-[#0c0c0c] py-20 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-semibold text-[#f8d99c] mb-6"
        >
          Building Tomorrow, Today.
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
          Join us as we continue shaping India’s most iconic landmarks.
        </p>

        <button className="px-10 py-3 text-lg rounded-lg bg-gradient-to-r from-[#d1a75e] to-[#f8d99c] text-black font-semibold shadow-xl hover:scale-105 transition">
          Explore More
        </button>
      </section>

    </div>
  );
};

export default Ourstory;
