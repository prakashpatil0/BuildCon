import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager",
    department: "Project Management",
    location: "Mumbai, Pune",
    type: "Full-time",
    experience: "8+ years",
    description: "Lead and manage large-scale real estate development projects from conception to completion.",
  },
  {
    id: 2,
    title: "Senior Architect",
    department: "Design & Architecture",
    location: "Pune",
    type: "Full-time",
    experience: "10+ years",
    description: "Design innovative and sustainable building solutions for residential and commercial projects.",
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Sales & Marketing",
    location: "Mumbai, Bangalore",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive business growth through strategic partnerships and client relationships.",
  },
  {
    id: 4,
    title: "Construction Manager",
    department: "Construction",
    location: "Pune, Mumbai",
    type: "Full-time",
    experience: "7+ years",
    description: "Oversee construction activities ensuring quality, safety, and timely project delivery.",
  },
  {
    id: 5,
    title: "Finance Analyst",
    department: "Finance",
    location: "Mumbai",
    type: "Full-time",
    experience: "3+ years",
    description: "Analyze financial data and support strategic decision-making processes.",
  },
  {
    id: 6,
    title: "HR Business Partner",
    department: "Human Resources",
    location: "Pune",
    type: "Full-time",
    experience: "5+ years",
    description: "Partner with business leaders to drive people strategy and organizational development.",
  },
];

// Benefits data
const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Attractive compensation packages with performance-based incentives",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description: "Comprehensive health and wellness benefits for you and your family",
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description: "Continuous learning opportunities and professional development programs",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description: "Flexible work arrangements and generous leave policies",
  },
  {
    icon: "🎯",
    title: "Career Growth",
    description: "Clear career progression paths and internal mobility opportunities",
  },
  {
    icon: "🏆",
    title: "Recognition & Rewards",
    description: "Regular recognition programs and reward schemes for outstanding performance",
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

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("all");

  const departments = ["all", ...new Set(jobOpenings.map((job) => job.department))];

  const filteredJobs = filter === "all" 
    ? jobOpenings 
    : jobOpenings.filter((job) => job.department === filter);

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
              Careers at BuildCon
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[#f0d3a3] text-xl max-w-2xl"
          >
            Join us in building the future of real estate
          </motion.p>
        </motion.div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-black">
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
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
          >
            Why Join BuildCon?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f0d3a3] text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Be part of a dynamic team that's shaping the future of real estate. We offer
            opportunities to work on iconic projects, grow your career, and make a meaningful impact.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1a1a] p-8 rounded-xl border border-[#d1a75e]/20 hover:border-[#d1a75e]/50 transition-all text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1, type: "spring" }}
                className="text-5xl mb-4"
              >
                {benefit.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-xl font-semibold mb-3 text-[#f7d69a]"
              >
                {benefit.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-[#d1a75e] leading-relaxed"
              >
                {benefit.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
        >
          Open Positions
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {departments.map((dept) => (
            <motion.button
              key={dept}
              onClick={() => setFilter(dept)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === dept
                  ? "bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white"
                  : "bg-[#1a1a1a] text-[#d1a75e] hover:bg-[#2a2a2a] border border-[#d1a75e]/30"
              }`}
            >
              {dept.charAt(0).toUpperCase() + dept.slice(1).replace(/([A-Z])/g, " $1")}
            </motion.button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedJob(job)}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-[#d1a75e]/20 hover:border-[#d1a75e]/50 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#f7d69a] mb-2">{job.title}</h3>
                  <p className="text-[#d1a74f] text-sm font-medium">{job.department}</p>
                </div>
                <span className="px-3 py-1 bg-[#d1a74f]/20 text-[#d1a74f] text-xs rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="flex gap-4 mb-4 text-sm text-[#d1a75e]">
                <span>📍 {job.location}</span>
                <span>💼 {job.experience}</span>
              </div>
              <p className="text-[#f0d3a3] text-sm line-clamp-2 mb-4">{job.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-medium"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#d1a75e] text-lg py-12"
          >
            No positions available in this department at the moment. Please check back later.
          </motion.p>
        )}
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-black py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-[#f7d69a]"
          >
            Don't See a Role That Fits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#f0d3a3] text-lg mb-8"
          >
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold text-lg"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;

