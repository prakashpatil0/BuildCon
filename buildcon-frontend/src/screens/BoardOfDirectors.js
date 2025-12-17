import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Your local image
import vishalSir from "../assets/OurLeaders/Vishal Sir.jpeg";
import VivekPawar from "../assets/OurLeaders/Vivek Pawar Director.png";
import HemantPawar from "../assets/OurLeaders/hemant Pawar Director.png";
import UmeshTapule from "../assets/OurLeaders/Umesh Tapule Director.jpeg";
import RekhaPawar from "../assets/OurLeaders/Rekha Pawar Director.jpeg";
const placeholder =
  "https://images.unsplash.com/photo-1520975958225-d3f06d0b1d08?w=800";

const directors = [
  {
    name: "Mr. Vishal Pawar",
    role: "Managing Director",
    img: vishalSir,
  },
  {
    name: "Ms. Rekha Pawar",
    role: "Director",
    img: RekhaPawar,
  },
  {
    name: "Mr. Vivek Pawar",
    role: "Director",
    img: VivekPawar,
  },
  {
    name: "Mr. Hemant Pawar",
    role: "Director",
    img: HemantPawar,
  },
  {
    name: "Mr. Umesh Tapule",
    role: "Director",  
    img: UmeshTapule,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BoardOfDirectors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 min-h-screen pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-10 md:pt-14">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative z-10"
        >
          <Link to="/gallery" onClick={(e) => e.stopPropagation()}>
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#d1a75e] hover:text-[#f9d891] transition-colors text-sm md:text-base relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Gallery
            </motion.button>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-semibold tracking-wide"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
            Board of Directors
          </span>
        </motion.h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16"
        >
          {directors.map((d, i) => (
            <motion.div
              key={`${d.name}-${i}`}
              custom={i + 1}
              variants={fadeUp}
              className="w-full"
            >
              {/* Image */}
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-square bg-[#faf9f6] rounded-lg border border-[#d1a75e]/30 hover:border-[#d1a75e]/50 transition-all shadow-lg shadow-[#d1a75e]/10 p-3 md:p-1 flex items-center justify-center">
                  <motion.img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-contain rounded-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.currentTarget.src = placeholder;
                    }}
                  />
                </div>
              </motion.div>

              {/* Name + Role */}
              <div className="mt-5">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.3 }}
                  className="text-[15px] md:text-[16px] font-medium text-gray-900"
                >
                  {d.name}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.4 }}
                  className="mt-1 text-[13px] md:text-[14px] text-[#d1a75e]"
                >
                  {d.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
