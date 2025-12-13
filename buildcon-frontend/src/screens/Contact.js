import React from "react";
import { motion } from "framer-motion";

const offices = [
  {
    title: "Corporate Office",
    address: "Tech Park One, Tower E, 191 Yerwada, Pune - 411 006, India",
    phone: "+91 20 6647 3200",
    email: "sales@buildcon.com",
  },
  {
    title: "Mumbai Office",
    address: "Express Towers, 20th Floor, Nariman Point, Mumbai - 400 021, India",
    phone: "+91 22 6686 3939",
    email: "info@buildcon.com",
  },
  {
    title: "Sales Enquiry",
    address: "Dedicated advisory desk · Global investors & NRIs",
    phone: "+91 8970 007700",
    email: "sales@buildcon.com",
  },
];

const emailLinks = [
  { label: "Sales Enquiry", value: "sales@buildcon.com" },
  { label: "Job Opportunities", value: "careers@buildcon.com" },
  { label: "Leasing Enquiry", value: "info@buildcon.com" },
];

const propertyOptions = [
  "Business Bay",
  "Trump Towers Pune",
  "YOO Villas",
  "BuildCon Towers",
  "Omnia Residences",
  "42 East Residences",
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: "easeOut" },
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

function Contact() {
  return (
    <div className="bg-black">
      <section className="-mt-20 bg-black px-6 pt-28 pb-16 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative flex-1"
          >
            <div className="relative mx-auto h-[320px] w-[260px] sm:h-[360px] sm:w-[320px]">
              {[
                { left: "-left-8", top: "top-6", h: "h-[240px]", w: "w-[180px]", delay: 0 },
                { left: "left-6", top: "top-0", h: "h-[260px]", w: "w-[200px]", delay: 0.2 },
                { left: "right-0", top: "top-6", h: "h-[280px]", w: "w-[220px]", delay: 0.4 },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: img.delay, duration: 0.8 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`absolute ${img.left} ${img.top} ${img.h} ${img.w} rounded-2xl bg-cover bg-center shadow-2xl shadow-[#d1a75e]/20 overflow-hidden`}
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-${index === 0 ? "1529429617124" : index === 1 ? "1502672260266" : "1479839672679"}-aee711a70412?auto=format&fit=crop&w=600&q=80')`,
                  }}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="flex-1 space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.35em] text-[#d1a75e]"
            >
              Established in 2002
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
                BuildCon is India&apos;s finest luxury real estate developer and operator.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base text-[#f0d3a3]"
            >
              Renowned for its leadership and excellence in the real estate sector, BuildCon has delivered over 35
              million sq. ft. with another 43 million sq. ft. underway across multi-asset classes.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="rounded-full border border-[#d1a75e]/50 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] px-5 py-2 text-sm font-semibold text-white tracking-[0.3em] hover:from-[#b8924b] hover:to-[#d1a74f] transition-all"
              >
                ENQUIRE NOW
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="rounded-full border border-[#d1a75e]/50 bg-[#d1a75e]/20 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-[#f8d99c] hover:bg-[#d1a75e]/30 transition-colors"
              >
                ↑
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4"
            >
              Our Offices
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-semibold text-[#f7d69a]"
            >
              Get In Touch
            </motion.h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {offices.map((office, index) => (
              <motion.article
                key={office.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full rounded-3xl border border-[#d1a75e]/20 bg-black/90 p-6 shadow-lg shadow-[#d1a75e]/10"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-[#f7d69a] mb-4"
                >
                  {office.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 text-sm text-[#d1a75e] leading-relaxed"
                >
                  {office.address}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 text-sm font-semibold text-[#f0d3a3]"
                >
                  {office.phone}
                </motion.p>
                <motion.a
                  href={`mailto:${office.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5, color: "#f9d891" }}
                  className="text-sm text-[#d1a75e] hover:text-[#f8d99c] transition-colors block mt-2"
                >
                  {office.email}
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <motion.p
                variants={fadeUp}
                className="text-xs uppercase tracking-[0.3em] text-[#d1a75e]"
              >
                Send an Enquiry
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-semibold text-[#f7d69a]"
              >
                Connect with our concierge desk.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-sm text-[#d1a75e]"
              >
                Share your intent and our advisors will curate site visits, investment decks, and bespoke proposals
                within 24 hours.
              </motion.p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="space-y-4 rounded-3xl border border-[#d1a75e]/20 bg-black/90 p-6 shadow-lg shadow-[#d1a75e]/10"
            >
              {emailLinks.map((entry, index) => (
                <motion.div
                  key={entry.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col group"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d1a75e] mb-1">
                    {entry.label}
                  </span>
                  <motion.a
                    href={`mailto:${entry.value}`}
                    whileHover={{ x: 5, color: "#f9d891" }}
                    className="text-lg font-semibold text-[#f0d3a3] transition-colors"
                  >
                    {entry.value}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="rounded-3xl border border-[#d1a75e]/20 bg-black/90 p-6 shadow-lg shadow-[#d1a75e]/10"
          >
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="First Name"
                  required
                  className="rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Last Name"
                  required
                  className="rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  placeholder="Mobile"
                  required
                  className="rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                />
              </div>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                defaultValue="default"
                required
                className="w-full rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
              >
                <option value="default" disabled className="bg-black text-[#d1a75e]">
                  Select Property
                </option>
                {propertyOptions.map((option) => (
                  <option key={option} value={option} className="bg-black text-[#f0d3a3]">
                    {option}
                  </option>
                ))}
              </motion.select>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={4}
                placeholder="Tell us about your requirement"
                className="w-full rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#d1a74f] to-[#b8924b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d1a75e]/30 transition-all hover:from-[#b8924b] hover:to-[#d1a74f] md:w-auto"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-black pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-[#d1a75e]/20 bg-black/90 p-4 shadow-lg shadow-[#d1a75e]/10"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-[16/8] w-full rounded-2xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

