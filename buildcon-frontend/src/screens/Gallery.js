import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample press/news data
const pressNews = [
  {
    id: 1,
    title: "City Gets 'Nukkad', The First Organized Hawkers Park",
    source: "Hindustan Times",
    date: "08th August 2024",
    description: "BuildCon introduces innovative organized hawkers park, setting new standards for urban planning and community spaces.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1000",
  },
  {
    id: 2,
    title: "BuildCon Office Parks Commissions Phase II of Business Park",
    source: "Business Standard",
    date: "21st January 2024",
    description: "Major milestone achieved with the commissioning of Phase II, expanding our commercial portfolio significantly.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
  },
  {
    id: 3,
    title: "BuildCon Honoured with 3 Safety 'Oscars'",
    source: "Construction Week",
    date: "15th December 2023",
    description: "Recognition for excellence in construction safety practices and commitment to worker welfare.",
    image: "https://images.unsplash.com/photo-1581091012184-5c1d34b37dac?w=1000",
  },
  {
    id: 4,
    title: "Luxury Villas Styled by Internationally Renowned Designer Launched",
    source: "Vogue",
    date: "19th March 2023",
    description: "Premium residential project featuring world-class design and luxury amenities launched successfully.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1000",
  },
  {
    id: 5,
    title: "BuildCon Introduces Innovative Construction Techniques",
    source: "The Hindu Businessline",
    date: "15th January 2023",
    description: "Adoption of dry construction technique to reduce water usage and promote sustainable building practices.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000",
  },
  {
    id: 6,
    title: "Technology Meets Luxury in New Residential Towers",
    source: "Times of India",
    date: "15th August 2022",
    description: "Integration of smart home technology with luxury living spaces in latest residential development.",
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=1000",
  },
];

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    department: "Executive Leadership",
    bio: "With over 25 years of experience in real estate development, Rajesh leads BuildCon's strategic vision and growth initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Chief Operating Officer",
    department: "Operations",
    bio: "Priya brings expertise in project management and operations, ensuring seamless execution of all development projects.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Head of Design",
    department: "Architecture & Design",
    bio: "Amit is an award-winning architect with a passion for creating sustainable and innovative building designs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Head of Sales & Marketing",
    department: "Sales",
    bio: "Sneha drives customer engagement and brand positioning, with a track record of successful project launches.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Head of Construction",
    department: "Construction",
    bio: "Vikram oversees all construction activities, ensuring quality, safety, and timely project delivery.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "Head of Finance",
    department: "Finance",
    bio: "Anjali manages financial strategy and operations, ensuring sustainable growth and financial stability.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
  },
];

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

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("media");
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="w-full bg-black min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-black to-[#0f0f0f]"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-semibold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              Gallery
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#f0d3a3] text-xl max-w-2xl"
          >
            Explore our media coverage and meet our team
          </motion.p>
        </motion.div>
      </section>

      {/* ================= TABS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center gap-8 mb-12">
          {[
            { id: "media", label: "Media & Press" },
            { id: "team", label: "Our Team" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white"
                  : "bg-[#1a1a1a] text-[#d1a75e] hover:bg-[#2a2a2a] border border-[#d1a75e]/30"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* ================= MEDIA SECTION ================= */}
        <AnimatePresence mode="wait">
          {activeTab === "media" && (
            <motion.div
              key="media"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-3xl font-semibold mb-12 text-[#f7d69a]"
              >
                Press & Media Coverage
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pressNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedNews(news)}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-xl shadow-[#d1a75e]/20">
                      <motion.img
                        src={news.image}
                        alt={news.title}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-[250px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="text-xs text-[#d1a75e] mb-2"
                        >
                          {news.source} • {news.date}
                        </motion.p>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="text-lg font-semibold text-[#f7d69a] line-clamp-2"
                        >
                          {news.title}
                        </motion.h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= TEAM SECTION ================= */}
          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-3xl font-semibold mb-12 text-[#f7d69a]"
              >
                Meet Our Team
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedMember(member)}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-xl shadow-[#d1a75e]/20 bg-[#1a1a1a] border border-[#d1a75e]/20">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-[320px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="text-xl font-semibold text-[#f7d69a] mb-1"
                        >
                          {member.name}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-sm text-[#d1a74f] font-medium mb-1"
                        >
                          {member.role}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="text-xs text-[#d1a75e]"
                        >
                          {member.department}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ================= NEWS DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedNews && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-black border border-[#d1a75e]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#d1a75e]/20 hover:bg-[#d1a75e]/30 rounded-full text-[#f9d891]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <div className="relative h-[300px] overflow-hidden">
                  <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <p className="text-[#d1a75e] text-sm mb-4">{selectedNews.source} • {selectedNews.date}</p>
                  <h2 className="text-3xl font-semibold text-[#f7d69a] mb-4">{selectedNews.title}</h2>
                  <p className="text-[#f0d3a3] text-lg leading-relaxed">{selectedNews.description}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ================= TEAM MEMBER DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-black border border-[#d1a75e]/30 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#d1a75e]/20 hover:bg-[#d1a75e]/30 rounded-full text-[#f9d891]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                <div className="relative h-[400px] overflow-hidden">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-3xl font-semibold text-[#f7d69a] mb-2">{selectedMember.name}</h2>
                    <p className="text-[#d1a74f] font-medium mb-1">{selectedMember.role}</p>
                    <p className="text-[#d1a75e] text-sm">{selectedMember.department}</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#f7d69a] mb-4">About</h3>
                  <p className="text-[#f0d3a3] text-lg leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

