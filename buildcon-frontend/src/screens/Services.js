import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Service data based on Panchshil website
const services = [
  {
    id: 1,
    title: "Development Management",
    shortDesc: "End-to-end development solutions for premium real estate projects",
    description: "Our Development Management service provides comprehensive oversight of real estate projects from conception to completion. We handle all aspects including land acquisition, regulatory approvals, design coordination, construction management, and project delivery. Our expertise ensures timely completion, quality assurance, and optimal resource utilization while maintaining the highest standards of excellence.",
    features: [
      "Land acquisition and due diligence",
      "Regulatory compliance and approvals",
      "Design and architecture coordination",
      "Construction project management",
      "Quality control and assurance",
      "Timeline and budget management",
      "Stakeholder coordination",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
  },
  {
    id: 2,
    title: "Facility Management",
    shortDesc: "Comprehensive facility operations and maintenance services",
    description: "Our Facility Management service ensures seamless operations and maintenance of commercial and residential properties. We provide 24/7 support, preventive maintenance, security services, housekeeping, and technical support. Our team ensures optimal building performance, energy efficiency, and a superior experience for all occupants.",
    features: [
      "24/7 facility operations",
      "Preventive maintenance programs",
      "Security and surveillance",
      "Housekeeping and janitorial services",
      "HVAC and electrical maintenance",
      "Energy management and optimization",
      "Vendor and contractor management",
    ],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000",
  },
  {
    id: 3,
    title: "Fit-out Management",
    shortDesc: "Complete interior design and fit-out solutions",
    description: "Our Fit-out Management service delivers turnkey interior solutions for office spaces, retail outlets, and residential units. We manage the entire process from design conceptualization to final installation, ensuring spaces are functional, aesthetically pleasing, and aligned with your brand identity. We work with premium materials and skilled craftsmen to create exceptional environments.",
    features: [
      "Interior design and space planning",
      "Material selection and procurement",
      "Custom furniture and fixtures",
      "MEP (Mechanical, Electrical, Plumbing) coordination",
      "Project timeline management",
      "Quality installation and finishing",
      "Post-completion support",
    ],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1000",
  },
  {
    id: 4,
    title: "Project Management",
    shortDesc: "Professional project management for complex developments",
    description: "Our Project Management service provides expert oversight for large-scale real estate developments. We coordinate between architects, engineers, contractors, and stakeholders to ensure projects are delivered on time, within budget, and to the highest quality standards. Our systematic approach minimizes risks and maximizes project success.",
    features: [
      "Project planning and scheduling",
      "Budget and cost management",
      "Risk assessment and mitigation",
      "Stakeholder communication",
      "Quality assurance and control",
      "Contract management",
      "Progress monitoring and reporting",
    ],
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1000",
  },
  {
    id: 5,
    title: "Residential Leasing & Resale",
    shortDesc: "Expert residential property leasing and resale services",
    description: "Our Residential Leasing & Resale service offers comprehensive support for property owners and tenants. We handle property listings, tenant screening, lease negotiations, property viewings, documentation, and ongoing property management. Our extensive network and market expertise ensure optimal rental yields and smooth transactions for all parties involved.",
    features: [
      "Property listing and marketing",
      "Tenant screening and verification",
      "Lease documentation and negotiation",
      "Property viewings and inspections",
      "Rent collection and management",
      "Property maintenance coordination",
      "Resale advisory and transaction support",
    ],
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000",
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
            Comprehensive real estate solutions tailored to your needs
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
            Let us help you find the right service
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

