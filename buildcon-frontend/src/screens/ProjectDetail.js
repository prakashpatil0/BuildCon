import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import Sai Nagari images
import saiNagari1 from "../assets/Sai Nagari/Sai Nagari 1.webp";
import saiNagari2 from "../assets/Sai Nagari/Sai Nagari 2.webp";
import saiNagari3 from "../assets/Sai Nagari/Sai Nagari 3.webp";
import saiNagari4 from "../assets/Sai Nagari/Sai Nagari 4.webp";
import saiNagari5 from "../assets/Sai Nagari/Sai Nagari 5.webp";
import saiNagari6 from "../assets/Sai Nagari/Sai Nagari 6.webp";
import saiNagariClubhouse from "../assets/Sai Nagari/Sai Nagari Clubhouse.webp";
import saiNagariGarden from "../assets/Sai Nagari/Sai Nagari Garden.webp";
import saiNagariTemple from "../assets/Sai Nagari/Sai Nagari Temple.webp";
import layout1BHK from "../assets/Sai Nagari/Flat Layout Of Sai Nagari (1 BHK).webp";
import layout2BHK from "../assets/Sai Nagari/Flat Layout Of Sai Nagari (2 BHK).webp";

// Import Shree Shrushti images
import shreeShrushtiImage from "../assets/Sai Shrushti/shree shrushti image.webp";
// import shreeShrushtiSummary from "../assets/Sai Shrushti/Summary of Shree Shrushti.png";
import shreeShrushtiLayout1BHK from "../assets/Sai Shrushti/Flat Layout of Shree Shrushti (1 BHK).webp";
import shreeShrushtiLayout2BHK from "../assets/Sai Shrushti/Flat Layout Of Shree Shrushti (2 BHK).webp";

// Import Vrindavan Regency images
import vrindavanRegency1 from "../assets/Vrindavan/Vrindavan Regency 1.webp";
import vrindavanRegency2 from "../assets/Vrindavan/Vrindavan Regency 2.webp";
import vrindavanRegency3 from "../assets/Vrindavan/Vrindavan Regency 3.webp";
// import vrindavanRegencySummary from "../assets/Vrindavan/Summery of Vrindavan Regency.png";
import vrindavanLayout1_2BHK from "../assets/Vrindavan/Vrindavan Regency Layout ( 1 & 2 BHK).webp";
import vrindavanLayout3BHK from "../assets/Vrindavan/Vrindavan Regency Layout (3  BHK).webp";

// Import Sai Dwarika images
import saiDwarikaPhoto1 from "../assets/Sai Dwarika/Saidwarika Photo 1.webp";
import saiDwarikaPhoto2 from "../assets/Sai Dwarika/Saidwarika Photo 2.webp";
// import saiDwarikaSummary from "../assets/Sai Dwarika/Summery of Saidwarika.png";
import saiDwarikaLayout1BHK from "../assets/Sai Dwarika/Saidwarika Flat Layout (1 BHK).webp";
import saiDwarikaLayout2BHK from "../assets/Sai Dwarika/Saidwarika Flat Layout (2 BHK).webp";
import saiDwarikaLayout3BHK from "../assets/Sai Dwarika/Saidwarika Flat Layout (3 BHK).webp";

// Import Maa Pranaam Hospital images
import maaPranaamHospitalImage from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Image.webp";
import maaPranaamHospitalImages from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Images.webp";
import maaPranaamHospitalLayout from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Layout.webp";
import maaPranaamHospitalLayout2 from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Layout (2).webp";
import maaPranaamHospitalLayout4 from "../assets/Maa Pranaam Hospital/Mauli Regency Hospital Layout (4).webp";

const projectData = {
  "sai-nagari": {
    name: "Sai Nagari",
    location: "Katraj, Pune",
    mix: "6.75+ Million Sq. Ft. mixed-use",
    details: "Transit-oriented district with office, retail, and residences.",
    status: "Ongoing",
    description: "Sai Nagari is a landmark mixed-use development spanning over 6.75 million square feet in Katraj, Pune. This transit-oriented district seamlessly integrates office spaces, retail outlets, and premium residences, creating a vibrant community hub. The project represents a new standard in urban living, combining modern architecture with sustainable design principles.",
    features: [
      "Transit-oriented development with excellent connectivity",
      "Mixed-use community with office, retail, and residential spaces",
      "Premium residences with world-class amenities",
      "State-of-the-art office spaces for modern businesses",
      "High Street retail spine with premium brands",
      "Sustainable design with green building practices",
      "24/7 security and concierge services",
      "Landscaped gardens and recreational facilities",
    ],
    amenities: [
      "Clubhouse with fitness center",
      "Swimming pool and spa",
      "Landscaped gardens",
      "Temple and meditation spaces",
      "Children's play area",
      "Sports facilities",
      "Retail and dining options",
      "Parking facilities",
    ],
    heroImage: saiNagari1,
    galleryImages: [
      { src: saiNagari1, title: "Main Building" },
      { src: saiNagari2, title: "Exterior View" },
      { src: saiNagari3, title: "Architecture" },
      { src: saiNagari4, title: "Facade" },
      { src: saiNagari5, title: "Development" },
      { src: saiNagari6, title: "Project View" },
      { src: saiNagariClubhouse, title: "Clubhouse" },
      { src: saiNagariGarden, title: "Garden" },
      { src: saiNagariTemple, title: "Temple" },
    ],
    layouts: [
      { src: layout1BHK, title: "1 BHK Layout", type: "1 BHK" },
      { src: layout2BHK, title: "2 BHK Layout", type: "2 BHK" },
    ],
  },
  "shree-shrushti": {
    name: "Shree Shrushti",
    location: "Yewalewadi, Pune",
    mix: "1 & 2 BHK Residences",
    details: "Well-connected, peaceful community setting with essential amenities for daily life.",
    status: "Completed",
    description: "Shree Shrushti is a residential project developed by Shree Developers, spread over approximately 2 acres in Yewalewadi, Pune. The project offers more than 60 units with practical layouts and comfortable living spaces. Designed to provide a well-connected, peaceful community setting, Shree Shrushti ensures access to essential amenities for daily life, along with good connectivity to key city points, nearby shops, schools, and transport facilities.",
    features: [
      "Well-connected location with easy access to key city points",
      "Peaceful community setting",
      "Essential amenities for daily life",
      "Access to nearby shops, schools, and transport",
      "Practical and comfortable living spaces",
      "More than 60 units across 2 acres",
      "Quality construction by Shree Developers",
      "Affordable pricing options",
    ],
    amenities: [
      "Essential daily amenities",
      "Nearby shops and markets",
      "Access to schools",
      "Public transport connectivity",
      "Community spaces",
      "Parking facilities",
      "Security services",
      "Well-maintained common areas",
    ],
    heroImage: shreeShrushtiImage,
    galleryImages: [
      { src: shreeShrushtiImage, title: "Project View" },
      // { src: shreeShrushtiSummary, title: "Project Summary" },
    ],
    layouts: [
      { src: shreeShrushtiLayout1BHK, title: "1 BHK Layout", type: "1 BHK (400-550 sq ft)" },
      { src: shreeShrushtiLayout2BHK, title: "2 BHK Layout", type: "2 BHK (600-800 sq ft)" },
    ],
    projectArea: "2 acres",
    totalUnits: "60+ units",
    flatSizes: {
      "1 BHK": "400-550 sq ft",
      "2 BHK": "600-800 sq ft",
    },
    priceRange: "₹19.5 L – ₹38.5 L",
  },
  "vrindavan-regency": {
    name: "Vrindavan Regency",
    location: "Katraj - Kondhwa Road, Yewalewadi, Pune",
    mix: "1, 2 & 3 BHK Residences",
    details: "Ready-to-move complex with 2 towers, 100+ units spread over 3 acres. A convenient choice for comfortable housing in South Pune.",
    status: "Completed",
    description: "Vrindavan Regency is a ready-to-move residential complex developed by Shivam Nakoda Buildcon, spread over approximately 3 acres on Katraj - Kondhwa Road in Yewalewadi, Pune. The project features 2 towers with 100+ units, offering 1 BHK, 2 BHK, and some 3 BHK apartments designed for modern living. With excellent connectivity to key city areas via Katraj-Kondhwa Road, the project is close to schools, hospitals, markets, and everyday conveniences, making it a convenient choice for homebuyers seeking comfortable housing in South Pune.",
    features: [
      "Ready-to-move complex - immediate possession available",
      "Excellent connectivity via Katraj-Kondhwa Road",
      "Close proximity to schools, hospitals, and markets",
      "Designed for modern living with practical layouts",
      "2 towers with 100+ units across 3 acres",
      "Multiple configurations: 1 BHK, 2 BHK, and 3 BHK options",
      "RERA registered project (P52100013657)",
      "Convenient location in South Pune",
    ],
    amenities: [
      "24/7 Security",
      "Landscaped Gardens",
      "Kids' Play Area",
      "Clubhouse",
      "Power Backup",
      "Parking Facilities",
      "Nearby Schools",
      "Access to Hospitals",
    ],
    heroImage: vrindavanRegency1,
    galleryImages: [
      { src: vrindavanRegency1, title: "Main Building" },
      { src: vrindavanRegency2, title: "Exterior View" },
      { src: vrindavanRegency3, title: "Project View" },
      // { src: vrindavanRegencySummary, title: "Project Summary" },
    ],
    layouts: [
      { src: vrindavanLayout1_2BHK, title: "1 & 2 BHK Layout", type: "1 BHK & 2 BHK" },
      { src: vrindavanLayout3BHK, title: "3 BHK Layout", type: "3 BHK" },
    ],
    projectArea: "3 acres",
    totalUnits: "100+ units",
    structure: "2 towers",
    developer: "Shivam Nakoda Buildcon",
    reraId: "P52100013657",
    flatSizes: {
      "1 BHK": "Available",
      "2 BHK": "Available",
      "3 BHK": "Available",
    },
  },
  "sai-dwarika": {
    name: "Sai Dwarika",
    location: "Yewalewadi / Kondhwa Budruk, Pune",
    mix: "1 & 2 BHK Residences",
    details: "Ready-to-move residential project with modern amenities. Well-connected option for homeowners in South Pune with easy access to key roads and daily conveniences.",
    status: "Completed",
    description: "Sai Dwarika is a ready-to-move residential project developed by Maa Sankalp Buildcon, located in Yewalewadi / Kondhwa Budruk, Pune. The project spreads over several acres with plenty of units, offering 1 BHK and 2 BHK apartments along with larger configurations. Designed for modern living, Sai Dwarika features practical layouts and modern amenities designed for comfortable urban living. The project provides easy access to key roads and daily conveniences, making it a well-connected option for homeowners in South Pune.",
    features: [
      "Ready-to-move project - immediate possession available",
      "Well-connected location with easy access to key roads",
      "Modern amenities designed for comfortable urban living",
      "Practical layouts optimized for space and functionality",
      "Multiple configurations: 1 BHK, 2 BHK, and larger options",
      "Spreads over several acres with plenty of units",
      "Close proximity to daily conveniences",
      "Ideal location in South Pune for homeowners",
    ],
    amenities: [
      "Modern amenities for comfortable living",
      "24/7 Security",
      "Landscaped areas",
      "Power Backup",
      "Parking Facilities",
      "Easy access to key roads",
      "Nearby daily conveniences",
      "Well-maintained common areas",
    ],
    heroImage: saiDwarikaPhoto1,
    galleryImages: [
      { src: saiDwarikaPhoto1, title: "Main Building" },
      { src: saiDwarikaPhoto2, title: "Exterior View" },
      // { src: saiDwarikaSummary, title: "Project Summary" },
    ],
    layouts: [
      { src: saiDwarikaLayout1BHK, title: "1 BHK Layout", type: "1 BHK (600-670 sq ft)" },
      { src: saiDwarikaLayout2BHK, title: "2 BHK Layout", type: "2 BHK (800-1050 sq ft)" },
      { src: saiDwarikaLayout3BHK, title: "3 BHK Layout", type: "3 BHK" },
    ],
    developer: "Maa Sankalp Buildcon",
    flatSizes: {
      "1 BHK": "600-670 sq ft",
      "2 BHK": "800-1050 sq ft",
      "3 BHK": "Available",
    },
    priceRange: "₹20 L – ₹40 L+",
  },
  "maa-pranaam-hospitality": {
    name: "Maa Pranaam Hospitality",
    location: "Pune",
    mix: "Hospitality & Healthcare",
    details: "Premium hospitality and healthcare facility with world-class amenities and services. Mauli Regency Hospital represents excellence in healthcare infrastructure combined with hospitality services.",
    status: "Ongoing",
    description: "Maa Pranaam Hospitality presents Mauli Regency Hospital, a state-of-the-art healthcare and hospitality facility in Pune. This project combines advanced medical infrastructure with premium hospitality services, creating a unique healthcare experience. The facility is designed to provide comprehensive medical care while ensuring patient comfort and convenience through integrated hospitality services. With modern architecture, cutting-edge medical technology, and world-class amenities, Mauli Regency Hospital sets a new standard in healthcare delivery.",
    features: [
      "Advanced healthcare infrastructure with modern medical facilities",
      "Integrated hospitality services for patient comfort",
      "State-of-the-art medical technology and equipment",
      "Premium patient care and accommodation facilities",
      "Comprehensive healthcare services under one roof",
      "Modern architecture designed for healthcare excellence",
      "Well-equipped medical departments and specialized units",
      "24/7 emergency and critical care services",
    ],
    amenities: [
      "Advanced Medical Equipment",
      "Premium Patient Rooms",
      "Emergency Services",
      "Specialized Medical Departments",
      "Diagnostic Facilities",
      "Pharmacy Services",
      "Cafeteria & Dining",
      "Parking Facilities",
      "Reception & Concierge",
      "Waiting Areas",
      "Medical Consultation Rooms",
      "Surgical Facilities",
    ],
    heroImage: maaPranaamHospitalImage,
    galleryImages: [
      { src: maaPranaamHospitalImage, title: "Main Building" },
      { src: maaPranaamHospitalImages, title: "Hospital View" },  
    ],
    layouts: [
      { src: maaPranaamHospitalLayout, title: "Hospital Layout", type: "Main Layout" },
      { src: maaPranaamHospitalLayout2, title: "Hospital Layout 2", type: "Layout Plan 2" },
      { src: maaPranaamHospitalLayout4, title: "Hospital Layout 4", type: "Layout Plan 4" },
    ],
    projectArea: "Hospital Facility",
    totalUnits: "Multi-specialty Hospital",
    developer: "Maa Pranaam Buildcon",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) {
    return (
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={project.heroImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-2 bg-[#d1a75e]/30 backdrop-blur-sm border border-[#d1a75e]/50 rounded-full text-sm font-semibold text-gray-900 mb-4"
          >
            {project.status}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-semibold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              {project.name}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-900 text-xl md:text-2xl mb-2 font-medium"
          >
            {project.location}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-[#d1a75e] text-lg max-w-2xl"
          >
            {project.mix}
          </motion.p>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 px-6 py-3 bg-white/90 backdrop-blur-sm border border-[#d1a75e]/50 rounded-lg text-[#d1a75e] font-semibold hover:bg-[#d1a75e] hover:text-white transition-all flex items-center gap-2"
        > 
          <span>←</span> Back
        </motion.button>
      </section>

      {/* ================= TABS SECTION ================= */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#d1a75e]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "layouts", label: "Layouts" },
              { id: "gallery", label: "Gallery" },
              { id: "amenities", label: "Amenities" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-[#d1a74f] text-gray-900 font-semibold"
                    : "border-transparent text-gray-700 hover:text-[#d1a75e] font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]">About the Project</h2>
                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <p className="text-[#d1a75e] text-base leading-relaxed mb-8">
                  {project.details}
                </p>
                
                {/* Additional Project Information */}
                {(project.projectArea || project.totalUnits || project.flatSizes || project.priceRange || project.structure || project.developer || project.reraId) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                  >
                    {project.projectArea && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Project Area</p>
                        <p className="text-gray-900 text-xl font-semibold">{project.projectArea}</p>
                      </div>
                    )}
                    {project.totalUnits && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Total Units</p>
                        <p className="text-[#f7d69a] text-xl font-semibold">{project.totalUnits}</p>
                      </div>
                    )}
                    {project.structure && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Structure</p>
                        <p className="text-[#f7d69a] text-xl font-semibold">{project.structure}</p>
                      </div>
                    )}
                    {project.developer && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Developer</p>
                        <p className="text-[#f7d69a] text-lg font-semibold">{project.developer}</p>
                      </div>
                    )}
                    {project.reraId && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">RERA ID</p>
                        <p className="text-[#f7d69a] text-base font-semibold">{project.reraId}</p>
                      </div>
                    )}
                    {project.flatSizes && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Flat Configurations</p>
                        {Object.entries(project.flatSizes).map(([key, value]) => (
                          <p key={key} className="text-[#f7d69a] text-lg">{key}: {value}</p>
                        ))}
                      </div>
                    )}
                    {project.priceRange && (
                      <div className="bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30">
                        <p className="text-[#d1a75e] text-sm mb-2">Price Range</p>
                        <p className="text-[#f7d69a] text-xl font-semibold">{project.priceRange}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-[#f7d69a]">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 bg-[#faf9f6] p-6 rounded-lg border border-[#d1a75e]/30"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="mt-1 w-3 h-3 rounded-full bg-[#d1a74f] flex-shrink-0"
                      />
                      <span className="text-[#d1a75e] text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "layouts" && (
            <motion.div
              key="layouts"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-semibold mb-6 text-[#f7d69a]">Flat Layouts</h2>
                <p className="text-[#f0d3a3] text-lg leading-relaxed mb-8">
                  Explore our thoughtfully designed residential layouts that maximize space and comfort.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {project.layouts.map((layout, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-[#faf9f6] rounded-2xl overflow-hidden border border-[#d1a75e]/30"
                  >
                    <div className="relative h-[500px] overflow-hidden bg-gray-100">
                      <motion.img
                        src={layout.src}
                        alt={layout.title}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-[#f7d69a] mb-2">
                        {layout.title}
                      </h3>
                      <p className="text-[#d1a75e]">{layout.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-semibold mb-6 text-[#f7d69a]">Project Gallery</h2>
                <p className="text-[#f0d3a3] text-lg leading-relaxed mb-8">
                  Take a visual journey through {project.name} and experience the beauty of our development.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedImage(image)}
                    className="group relative overflow-hidden rounded-xl bg-[#faf9f6] border border-[#d1a75e]/30 cursor-pointer"
                  >
                    <div className="relative h-[300px] overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.title}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white font-semibold text-lg">{image.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "amenities" && (
            <motion.div
              key="amenities"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-semibold mb-6 text-[#f7d69a]">Amenities</h2>
                <p className="text-[#f0d3a3] text-lg leading-relaxed mb-8">
                  Experience luxury living with our world-class amenities designed to enhance your lifestyle.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#1a2a3a] p-6 rounded-lg border border-[#d1a75e]/20 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="w-12 h-12 rounded-full bg-[#d1a74f]/20 flex items-center justify-center mx-auto mb-4"
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                    <p className="text-[#f0d3a3] font-medium">{amenity}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6 text-[#f7d69a]"
          >
            Interested in {project.name}?
          </motion.h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold text-lg"
              >
                Enquire Now
              </motion.button>
            </Link>
            <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1a2a3a] border border-[#d1a75e]/50 text-[#f9d891] rounded-lg font-semibold text-lg hover:border-[#d1a75e] transition-colors"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#0a1628]/95 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white text-4xl hover:text-[#f9d891] transition-colors"
            >
              ×
            </button>
            <p className="absolute bottom-8 text-white text-xl font-semibold">
              {selectedImage.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;

