import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Service data (same as in Services.js)
const servicesData = {
  "development-management": {
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
  "facility-management": {
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
  "fit-out-management": {
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
  "project-management": {
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
  "residential-leasing-resale": {
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

