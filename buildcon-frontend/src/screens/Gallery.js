import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import VishaPawar from "../assets/OurTeam/VishaPawarManagingDirector.jpg";
import UmeshTapal from "../assets/OurTeam/UmeshTapalDirector.jpg";
import ParagSalunkhe from "../assets/OurTeam/ParagSalunkhe-SalesExecutiveDirector.jpg";

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

// Team members data - in hierarchy order
const teamMembers = [
  {
    id: 1,
    name: "Visha Pawar",
    role: "Managing Director",
    department: "Executive Leadership",
    bio: "Leading MaaPranaam Buildcon with strategic vision and extensive experience in real estate development. Driving innovation and excellence across all projects.",
    image: VishaPawar,
  },
  {
    id: 2,
    name: "Umesh Tapal",
    role: "Director",
    department: "Executive Leadership",
    bio: "Bringing years of expertise in construction and project management. Overseeing key strategic initiatives and ensuring operational excellence.",
    image: UmeshTapal,
  },
  {
    id: 3,
    name: "Parag Salunkhe",
    role: "Sales Executive Director",
    department: "Sales & Marketing",
    bio: "Driving sales growth and customer relationships with a proven track record in real estate sales. Leading the sales team to achieve exceptional results.",
    image: ParagSalunkhe,
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

  const navigate = useNavigate();

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
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-semibold mb-3"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              WHO WE ARE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#f0d3a3] text-2xl sm:text-3xl max-w-2xl mx-auto mb-9 text-center"
          >
            Guided by visionary leadership
          </motion.p>


          <div className="grid md:grid-cols-2 gap-12">
            

           {/* Card 1 */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="bg-[#111111] shadow-[0_18px_45px_rgba(0,0,0,0.8)] p-14 border border-white/10 rounded-xl text-center hover:border-[#e3c472] hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)] transition"
>
  <h3 className="text-2xl  text-[#f8e9bf] mb-3">Board of Directors</h3>

  <p className="text-gray-300 leading-relaxed mb-8">
    Experienced industry leaders ensuring we grow our positive impact.
  </p>

  <button
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/boardofdirectors");
    }}
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
              <h3 className="text-2xl  text-[#f8e9bf] mb-3">
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

