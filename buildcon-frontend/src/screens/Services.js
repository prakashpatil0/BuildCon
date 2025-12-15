import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Service data based on Maa Pranaam website (http://maapranaam.co.in/services.html#)
const services = [
  {
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
  {
    id: 2,
    title: "Building Remodels",
    shortDesc: "Helping in Building Remodels very easily",
    description: "Transform your existing building with our professional remodeling services. We help you renovate and upgrade your property to meet modern standards and your specific requirements. Our team handles everything from design conceptualization to execution, making the remodeling process smooth and hassle-free. Whether it's structural changes, layout modifications, or aesthetic upgrades, we ensure quality workmanship and minimal disruption to your daily life.",
    features: [
      "Complete building remodeling solutions",
      "Structural modifications and upgrades",
      "Layout redesign and optimization",
      "Modern amenities integration",
      "Minimal disruption during work",
      "Quality materials and finishes",
      "Professional project management",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000",
  },
  {
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
  {
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
  {
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
  {
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

const Services = () => {
  const navigate = useNavigate();

  const getServiceSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");
  };

  const handleServiceClick = (service) => {
    const slug = getServiceSlug(service.title);
    navigate(`/services/${slug}`);
  };

  return (
    <div className="w-full bg-black min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] overflow-hidden">
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
              Our Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#f0d3a3] text-xl max-w-2xl"
          >
            We Are Specialists In - When We Build We Build With Conscience
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
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
            className="text-sm tracking-[6px] text-[#d1a75e] mb-4"
          >
            WHAT WE OFFER
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold text-[#f7d69a]"
          >
            What We Do
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl shadow-[#d1a75e]/20">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-[#f7d69a] mb-2"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-[#d1a75e] line-clamp-2"
                  >
                    {service.shortDesc}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 flex items-center text-[#f9d891] group-hover:text-[#f9d891]"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;

