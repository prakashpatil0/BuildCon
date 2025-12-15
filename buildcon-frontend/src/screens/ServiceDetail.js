import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Service data (same as in Services.js) - Based on Maa Pranaam website
const servicesData = {
  "home-construction": {
    id: 1,
    title: "Home Construction",
    shortDesc: "Leading Company in the Home Constructions",
    description: "Maa Pranaam Buildcon is a leading company in home construction, delivering quality residential projects with precision and excellence. We specialize in building homes that combine modern design with functional living spaces. Our expertise spans from initial planning to final handover, ensuring every home meets the highest standards of quality, safety, and comfort. We work with experienced architects, engineers, and skilled craftsmen to bring your dream home to life.",
    features: [
      "Expert home construction services",
      "Quality materials and craftsmanship",
      "Modern design and architecture",
      "Timely project completion",
      "Comprehensive planning and execution",
      "Regulatory compliance and approvals",
      "Post-construction support",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
  },  
  "interior-design": {
    id: 3,
    title: "Interior Design",
    shortDesc: "Interior Design by professional designers with latest trends",
    description: "Our interior design service brings together professional designers who stay updated with the latest trends and design philosophies. We create beautiful, functional, and personalized interior spaces that reflect your style and enhance your living experience. From concept to completion, we handle every aspect of interior design including space planning, material selection, color schemes, furniture, and decor to create spaces that are both aesthetically pleasing and practical.",
    features: [
      "Professional interior design services",
      "Latest design trends and styles",
      "Custom space planning",
      "Material and color selection",
      "Furniture and decor coordination",
      "3D visualization and design concepts",
      "End-to-end design execution",
    ],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1000",
  },
  "exterior-design": {
    id: 4,
    title: "Exterior Design",
    shortDesc: "Expert in the Exterior Design with professional designers",
    description: "Our exterior design service specializes in creating stunning facades and outdoor spaces that make a lasting impression. Our professional designers work with you to develop exterior designs that complement the architecture while enhancing curb appeal. We handle facade design, landscaping, outdoor spaces, and exterior finishes to create cohesive and attractive building exteriors that stand out in the neighborhood.",
    features: [
      "Expert exterior design services",
      "Facade design and planning",
      "Landscaping and outdoor spaces",
      "Material selection for exteriors",
      "Color and texture coordination",
      "Curb appeal enhancement",
      "Professional design execution",
    ],
    image: "https://images.unsplash.com/photo-1523217582562-09a368dd313d?w=1000",
  },
  "renovation": {
    id: 5,
    title: "Renovation",
    shortDesc: "Renovate your home with us easily without any tension",
    description: "Renovate your home with us easily and without any tension. We understand that home renovation can be stressful, which is why we make the process as smooth and hassle-free as possible. Our experienced team handles all aspects of renovation from planning to execution, ensuring quality workmanship and timely completion. Whether you're renovating a single room or the entire home, we provide comprehensive solutions tailored to your needs and budget.",
    features: [
      "Stress-free renovation process",
      "Complete home renovation services",
      "Room-by-room renovation options",
      "Quality workmanship and materials",
      "Timely project completion",
      "Budget-friendly solutions",
      "Minimal disruption to daily life",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000",
  },
  "safety-management": {
    id: 6,
    title: "Safety Management",
    shortDesc: "Taken all necessary precautions for safety of workers",
    description: "Safety is our top priority. We take all necessary precautions to ensure the safety of our workers, clients, and the general public at all construction sites. Our comprehensive safety management program includes regular safety training, proper use of safety equipment, adherence to safety protocols, and continuous monitoring. We maintain strict compliance with all safety regulations and standards to create a secure working environment for everyone involved.",
    features: [
      "Comprehensive safety protocols",
      "Regular safety training programs",
      "Proper safety equipment and gear",
      "Site safety inspections",
      "Compliance with safety regulations",
      "Worker safety awareness",
      "Emergency response procedures",
    ],
    image: "https://images.unsplash.com/photo-1581091012184-5c1d34b37dac?w=1000",
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="w-full bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-[#f7d69a] mb-4">Service Not Found</h1>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold"
            >
              Back to Services
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <motion.img
          src={service.image}
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
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-semibold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              {service.title}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#f0d3a3] text-xl max-w-2xl"
          >
            {service.shortDesc}
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f0d3a3] text-lg leading-relaxed mb-8"
          >
            {service.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-8 text-[#f7d69a]"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 bg-[#1a1a1a] p-6 rounded-lg border border-[#d1a75e]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  className="mt-1 w-3 h-3 rounded-full bg-[#d1a74f] flex-shrink-0"
                />
                <span className="text-[#d1a75e] text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-[#f7d69a]"
          >
            Interested in This Service?
          </motion.h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#1a1a1a] border border-[#d1a75e]/50 text-[#f9d891] rounded-lg font-semibold text-lg hover:border-[#d1a75e] transition-colors"
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetail;

