import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import heroImg from "../assets/picture1.webp";
import teamImg from "../assets/picture2.webp";
import cultureImg from "../assets/picture4.webp";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
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

const Company = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);

  const values = [
    {
      title: "Pride",
      description: "Proudly associate with an organisation that creates world-class developments and provides exceptional lifestyle to its customers.",
      icon: "🏆",
    },
    {
      title: "Learning & Growth",
      description: "Be part of a diverse team of talented professionals in a dynamic, fast-paced environment. Our culture of continuous learning empowers you to unlock your full potential.",
      icon: "📚",
    },
    {
      title: "Purpose",
      description: "Join us in making a meaningful impact by supporting education, empowering communities, and championing environmental sustainability.",
      icon: "🌱",
    },
  ];

  const achievements = [
    {
      title: "Great Place to Work",
      year: "2024-25",
      description: "Recognized for creating an exceptional workplace culture",
    },
    {
      title: "Best Organisation for Women",
      year: "2024",
      description: "Awarded by Economic Times for gender diversity",
    },
    {
      title: "Excellence in Innovation",
      year: "2024",
      description: "Recognized for innovative construction practices",
    },
  ];

  const partners = [
    "Indian Institute of Management, Bangalore",
    "Indian Institute of Technology, Mumbai",
    "Indian Institute of Management, Calcutta",
    "Indian Institute of Technology, Delhi",
    "Indian Institute of Management, Ahmedabad",
    "Stanford Graduate School of Business",
    "Indian School of Business (ISB)",
    "London Business School",
  ];

  return (
    <div className="w-full bg-[#0f0f0f] text-white font-light">
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={heroImg}
          style={{ y: parallaxY }}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          alt=""
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-6xl tracking-wide font-semibold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              Why BuildCon
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-[#f0d3a3] text-lg md:text-xl tracking-wide max-w-3xl"
          >
            Shape the future of real estate with BuildCon
          </motion.p>
        </motion.div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
          >
            Building Legacies, Shaping Futures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f0d3a3] text-lg leading-relaxed max-w-4xl mx-auto"
          >
            BuildCon has transformed the way we live and work with world-class developments
            across residential, commercial, and hospitality portfolio. We are shaping urban
            lifestyles and have crafted iconic developments designed as nurturing & enriching
            environments.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ x: -200, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl"
          >
            <motion.img
              src={teamImg}
              alt="Our Team"
              className="w-full h-auto rounded-xl shadow-[0_10px_40px_rgba(217,167,79,0.3)]"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold text-[#f3dfb4] mb-6"
            >
              Our Greatest Asset is Our People
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#f0d3a3] leading-relaxed mb-6 text-lg"
            >
              With a team of talented professionals, we live by our Employee Value
              Proposition - <span className="text-[#d1a74f] font-semibold">Build the Best, Be the Best</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-[#f0d3a3] leading-relaxed text-lg"
            >
              We foster a culture of excellence, innovation, and continuous growth where
              every team member can thrive and contribute to our shared vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-semibold mb-20 text-[#f7d69a]"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1a1a1a] p-8 rounded-xl border border-[#d1a75e]/20 hover:border-[#d1a75e]/50 transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, type: "spring" }}
                  className="text-5xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-2xl font-semibold mb-4 text-[#f7d69a]"
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-[#d1a75e] leading-relaxed"
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK WITH THE BEST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-black">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
        >
          Work with the Best
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[#d1a75e] text-lg mb-12"
        >
          Our bright mix of talent comes from the best educational institutes and
          organisations across the globe.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-6 bg-[#1a1a1a] rounded-lg border border-[#d1a75e]/20 hover:border-[#d1a75e]/50 transition-all"
            >
              <p className="text-[#f0d3a3] text-sm font-medium">{partner}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="bg-black py-24 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-semibold mb-20 text-[#f7d69a]"
        >
          A Celebrated Workplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[#d1a75e] text-lg mb-12 max-w-3xl mx-auto"
        >
          At BuildCon, we thrive at creating an inclusive culture that celebrates excellence.
        </motion.p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#d1a75e]/20 hover:border-[#d1a75e]/50 transition-all text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="text-xl font-semibold mb-2 text-[#f7d69a]"
              >
                {achievement.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className="text-[#d1a74f] font-semibold mb-3"
              >
                {achievement.year}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-[#d1a75e] text-sm"
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
          >
            Explore Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f0d3a3] text-lg mb-8"
          >
            Join us in building the future of real estate
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold text-lg"
              >
                View Careers
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Company;

