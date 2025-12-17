import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import team member images from OurTeam folder
import ParagSalunkheImg from "../assets/OurTeam/Parag Salunkhe Sales-Executive Director.jpeg";
import SradhaImg from "../assets/OurTeam/Sradha Senior Architecture.jpeg";
import RinkuImg from "../assets/OurTeam/Rinku Mam CFO.jpeg";
import MandarImg from "../assets/OurTeam/Mandar Jadhav.jpeg";
import UmeshShindeImg from "../assets/OurTeam/Umesh Shinde.jpeg";
import BharatShindeImg from "../assets/OurTeam/Bharat Shinde.jpeg";
import AmurtaGawadeImg from "../assets/OurTeam/Amurta Gawade.jpeg";

// Team members data - using same format as BoardOfDirectors
const teamMembers = [
  
  {
    name: "CA.Rinku Makhijani",
    role: "CFO",
    img: RinkuImg,
  },
  {
    name: "Mr. Mandar Jadhav",
    role: "CRM-Executive Director",
    img: MandarImg,
  },
  {
    name: "Mr. Bharat Shinde",
    role: "Project Executive Director",
    img: BharatShindeImg,
  },
  {
    name: "Mr. Parag Salunkhe",
    role: "Sales Executive Director",
    img: ParagSalunkheImg,
  },
  {
    name: "Mr.Umesh Shinde",
    role: "Compliance-Executive Director",
    img: UmeshShindeImg,
  },
  {
    name: "Ms.Amurta Gawade",
    role: "Senior Architecture",
    img: AmurtaGawadeImg,
  },
  {
    name: "Ms.Shraddha Nimbarte",
    role: "Senior Architecture",
    img: SradhaImg,
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

const Team = () => {
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
            Leadership Team
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
          {teamMembers.map((member, i) => (
            <motion.div
              key={`${member.name}-${i}`}
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
                <div className="w-full aspect-square bg-[#faf9f6] rounded-lg border border-[#d1a75e]/30 hover:border-[#d1a75e]/50 transition-all shadow-lg shadow-[#d1a75e]/10 p-3 md:p-3 flex items-center justify-center">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => {
                      e.currentTarget.src = "";
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
                  {member.name}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + 0.4 }}
                  className="mt-1 text-[13px] md:text-[14px] text-[#d1a75e]"
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
