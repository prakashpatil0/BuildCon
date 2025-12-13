import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import Sai Nagari images
import saiNagari1 from "../assets/Sai Nagari/Sai Nagari 1.jpg";
import saiNagari2 from "../assets/Sai Nagari/Sai Nagari 2.jpg";
import saiNagari3 from "../assets/Sai Nagari/Sai Nagari 3.jpg";
import saiNagari4 from "../assets/Sai Nagari/Sai Nagari 4.jpg";
import saiNagari5 from "../assets/Sai Nagari/Sai Nagari 5.jpg";
import saiNagari6 from "../assets/Sai Nagari/Sai Nagari 6.jpg";
import saiNagariClubhouse from "../assets/Sai Nagari/Sai Nagari Clubhouse.jpeg";
import saiNagariGarden from "../assets/Sai Nagari/Sai Nagari Garden.jpeg";
import saiNagariTemple from "../assets/Sai Nagari/Sai Nagari Temple.jpeg";
import layout1BHK from "../assets/Sai Nagari/Flat Layout Of Sai Nagari (1 BHK).png";
import layout2BHK from "../assets/Sai Nagari/Flat Layout Of Sai Nagari (2 BHK).png";

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
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectData[projectId];
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  if (!project) {
    return (
      <div className="w-full bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#f7d69a] mb-4">Project Not Found</h1>
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
    <div className="w-full bg-black min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.img
          src={project.heroImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

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
            className="px-4 py-2 bg-[#d1a75e]/30 backdrop-blur-sm border border-[#d1a75e]/50 rounded-full text-sm font-semibold text-[#f8d99c] mb-4"
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
            className="text-[#f0d3a3] text-xl md:text-2xl mb-2"
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
          className="absolute top-8 left-8 px-6 py-3 bg-black/50 backdrop-blur-sm border border-[#d1a75e]/50 rounded-lg text-[#f9d891] font-semibold hover:bg-black/70 transition-all flex items-center gap-2"
        >
          <span>←</span> Back
        </motion.button>
      </section>

      {/* ================= TABS SECTION ================= */}
      <section className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm border-b border-[#d1a75e]/20">
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
                    ? "border-[#d1a74f] text-[#f9d891]"
                    : "border-transparent text-[#d1a75e] hover:text-[#f0d3a3]"
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
                <h2 className="text-4xl font-semibold mb-6 text-[#f7d69a]">About the Project</h2>
                <p className="text-[#f0d3a3] text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <p className="text-[#d1a75e] text-base leading-relaxed mb-8">
                  {project.details}
                </p>
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
                      className="flex items-start gap-4 bg-[#1a1a1a] p-6 rounded-lg border border-[#d1a75e]/20"
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
                    className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#d1a75e]/20"
                  >
                    <div className="relative h-[500px] overflow-hidden bg-black">
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
                  Take a visual journey through Sai Nagari and experience the beauty of our development.
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
                    className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#d1a75e]/20 cursor-pointer"
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
                    className="bg-[#1a1a1a] p-6 rounded-lg border border-[#d1a75e]/20 text-center"
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold text-lg"
              >
                Enquire Now
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1a1a1a] border border-[#d1a75e]/50 text-[#f9d891] rounded-lg font-semibold text-lg hover:border-[#d1a75e] transition-colors"
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
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

