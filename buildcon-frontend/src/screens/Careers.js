import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationJob, setApplicationJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const departments = ["all", ...new Set(jobOpenings.map((job) => job.department))];

  const filteredJobs = filter === "all" 
    ? jobOpenings 
    : jobOpenings.filter((job) => job.department === filter);

  const handleApplyClick = (job) => {
    setApplicationJob(job);
    setShowApplicationModal(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resume: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Application submitted:", {
      job: applicationJob,
      ...formData,
    });
    
    // Show success message and close modal
    alert("Application submitted successfully! We'll get back to you soon.");
    setShowApplicationModal(false);
    setApplicationJob(null);
  };

  const closeModal = () => {
    setShowApplicationModal(false);
    setApplicationJob(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resume: null,
    });
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
                onClick={(e) => {
                  e.stopPropagation();
                  handleApplyClick(job);
                }}
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

      {/* ================= APPLICATION MODAL ================= */}
      <AnimatePresence>
        {showApplicationModal && applicationJob && (
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
              className="bg-[#1a1a1a] rounded-2xl border border-[#d1a75e]/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#d1a75e]/30 p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-[#f7d69a] mb-1">
                    Apply for {applicationJob.title}
                  </h2>
                  <p className="text-[#d1a75e] text-sm">{applicationJob.department}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-[#d1a75e] hover:text-[#f9d891] text-3xl transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Modal Body - Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Full Name <span className="text-[#d1a74f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d1a75e]/30 rounded-lg text-[#f0d3a3] focus:outline-none focus:border-[#d1a74f] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Email Address <span className="text-[#d1a74f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d1a75e]/30 rounded-lg text-[#f0d3a3] focus:outline-none focus:border-[#d1a74f] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Phone Number <span className="text-[#d1a74f]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d1a75e]/30 rounded-lg text-[#f0d3a3] focus:outline-none focus:border-[#d1a74f] transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Years of Experience <span className="text-[#d1a74f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d1a75e]/30 rounded-lg text-[#f0d3a3] focus:outline-none focus:border-[#d1a74f] transition-colors"
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#d1a75e]/30 rounded-lg text-[#f0d3a3] focus:outline-none focus:border-[#d1a74f] transition-colors resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-[#f0d3a3] font-medium mb-2">
                      Upload Resume <span className="text-[#d1a74f]">*</span>
                    </label>
                    <div className="border-2 border-dashed border-[#d1a75e]/30 rounded-lg p-6 text-center hover:border-[#d1a74f] transition-colors">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <svg
                          className="w-12 h-12 text-[#d1a75e] mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-[#f0d3a3] font-medium mb-1">
                          {formData.resume
                            ? formData.resume.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-[#d1a75e] text-sm">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </label>
                    </div>
                    {formData.resume && (
                      <p className="mt-2 text-[#d1a74f] text-sm">
                        ✓ {formData.resume.name} selected
                      </p>
                    )}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex gap-4 mt-8">
                  <motion.button
                    type="button"
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-[#0f0f0f] border border-[#d1a75e]/50 text-[#f9d891] rounded-lg font-semibold hover:border-[#d1a75e] transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded-lg font-semibold"
                  >
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;

