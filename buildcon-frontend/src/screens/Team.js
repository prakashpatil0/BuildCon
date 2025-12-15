import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import team member images
import VishaPawarImg from "../assets/OurTeam/VishaPawarManagingDirector.jpg";
import UmeshTapalImg from "../assets/OurTeam/UmeshTapalDirector.jpg";
import ParagSalunkheImg from "../assets/OurTeam/ParagSalunkhe-SalesExecutiveDirector.jpg";

// Team members data in hierarchical order
const teamMembers = [
  {
    id: 1,
    name: "Visha Pawar",
    designation: "Managing Director",
    image: VishaPawarImg,
    level: 1, // Top level
  },
  {
    id: 2,
    name: "Umesh Tapal",
    designation: "Director",
    image: UmeshTapalImg,
    level: 2, // Second level
  },
  {
    id: 3,
    name: "Parag Salunkhe",
    designation: "Sales Executive Director",
    image: ParagSalunkheImg,
    level: 3, // Third level
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="w-full bg-[#0f0f0f] text-white font-light min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 flex items-center justify-center text-center px-6"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl tracking-wide font-semibold mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
                Our Leadership Team
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#f0d3a3] text-lg md:text-xl tracking-wide max-w-3xl mx-auto"
            >
              Meet the visionaries driving BuildCon's success
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ================= TEAM HIERARCHY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-semibold mb-16 text-[#f7d69a]"
        >
          Leadership Hierarchy
        </motion.h2>

        {/* Hierarchical Layout */}
        <div className="flex flex-col items-center gap-12">
          {/* Level 1 - Managing Director (Top) */}
          {teamMembers
            .filter((member) => member.level === 1)
            .map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer group"
              >
                <div className="relative">
                  {/* Hierarchy indicator line going down */}
                  <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-[#d1a74f] to-transparent"></div>
                  
                  <div className="bg-[#1a1a1a] rounded-2xl p-8 border-2 border-[#d1a75e]/30 hover:border-[#d1a74f] transition-all shadow-2xl shadow-[#d1a75e]/10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="relative">
                        <motion.img
                          src={member.image}
                          alt={member.name}
                          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#d1a74f] shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Level badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Level 1
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-3xl md:text-4xl font-semibold text-[#f7d69a] mb-2">
                          {member.name}
                        </h3>
                        <p className="text-xl text-[#d1a74f] font-medium mb-4">
                          {member.designation}
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#d1a74f] to-transparent mx-auto md:mx-0"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Level 2 - Director (Middle) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {teamMembers
              .filter((member) => member.level === 2)
              .map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer group"
                >
                  <div className="relative">
                    {/* Hierarchy indicator line going down */}
                    <div className="absolute left-1/2 top-full w-0.5 h-12 bg-gradient-to-b from-[#d1a74f] to-transparent"></div>
                    
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-[#d1a75e]/30 hover:border-[#d1a74f] transition-all shadow-2xl shadow-[#d1a75e]/10">
                      <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                          <motion.img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#d1a74f] shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          {/* Level badge */}
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white text-xs font-bold px-3 py-1 rounded-full">
                            Level 2
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="text-2xl md:text-3xl font-semibold text-[#f7d69a] mb-2">
                            {member.name}
                          </h3>
                          <p className="text-lg text-[#d1a74f] font-medium">
                            {member.designation}
                          </p>
                          <div className="w-20 h-1 bg-gradient-to-r from-[#d1a74f] to-transparent mx-auto mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Level 3 - Sales Executive Director (Bottom) */}
          {teamMembers
            .filter((member) => member.level === 3)
            .map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer group"
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-[#d1a75e]/30 hover:border-[#d1a74f] transition-all shadow-2xl shadow-[#d1a75e]/10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#d1a74f] shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Level badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Level 3
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-semibold text-[#f7d69a] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-[#d1a74f] font-medium">
                        {member.designation}
                      </p>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#d1a74f] to-transparent mx-auto md:mx-0 mt-2"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* ================= MODAL FOR MEMBER DETAILS ================= */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] rounded-2xl border border-[#d1a75e]/30 max-w-2xl w-full p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-semibold text-[#f7d69a] mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-[#d1a74f] text-lg">{selectedMember.designation}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-[#d1a75e] hover:text-[#f9d891] text-3xl transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full md:w-48 h-48 rounded-lg object-cover border-2 border-[#d1a75e]/30"
                />
                <div className="flex-1">
                  <p className="text-[#f0d3a3] leading-relaxed">
                    {selectedMember.name} serves as {selectedMember.designation} at MaaPranaam Buildcon,
                    bringing expertise and leadership to drive the company's vision forward.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;

