import React, { useMemo, useRef, useState, useEffect } from "react";
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
  const formRef = useRef(null);
  const topRef = useRef(null);

  const API_BASE = useMemo(() => {
    return "http://www.maapranaam.co.in".replace(/\/$/, "");
  }, []);
  

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    property: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    property: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    property: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: false,
    error: "",
  });

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const setFieldTouched = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const isNameValid = (val) => {
    const v = (val || "").trim();
    if (!v) return false;
    // allow letters + spaces + dot + apostrophe + hyphen (no digits)
    return /^[A-Za-z][A-Za-z\s.'-]{1,}$/.test(v);
  };

  const isEmailValid = (val) => {
    const v = (val || "").trim();
    return /^\S+@\S+\.\S+$/.test(v);
  };

  const isPhoneValid = (val) => {
    const v = (val || "").trim();
    return /^\d{10}$/.test(v);
  };

  const validateAll = (data) => {
    const next = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      property: "",
    };

    if (!data.firstName.trim()) next.firstName = "First Name is required";
    else if (!isNameValid(data.firstName)) next.firstName = "Enter valid First Name (letters only)";

    if (!data.lastName.trim()) next.lastName = "Last Name is required";
    else if (!isNameValid(data.lastName)) next.lastName = "Enter valid Last Name (letters only)";

    if (!data.phone.trim()) next.phone = "Mobile is required";
    else if (!isPhoneValid(data.phone)) next.phone = "Enter valid 10-digit Mobile number";

    if (!data.email.trim()) next.email = "Email is required";
    else if (!isEmailValid(data.email)) next.email = "Enter valid Email address";

    if (!data.property.trim()) next.property = "Select Property";

    return next;
  };

  const hasAnyError = (errs) => Object.values(errs).some((v) => (v || "").trim().length > 0);

  const fieldError = (key) => (touched[key] ? errors[key] : "");

  const onChange = (key) => (e) => {
    const raw = e?.target?.value ?? "";

    // ✅ Phone: only digits, max 10, no letters allowed
    if (key === "phone") {
      const onlyDigits = String(raw).replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: onlyDigits }));
      setStatus((prev) => ({ ...prev, ok: false, error: "" }));

      setErrors((prev) => ({
        ...prev,
        phone: onlyDigits.length === 0 ? "Mobile is required" : onlyDigits.length === 10 ? "" : "Enter 10 digits",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [key]: raw }));
    setStatus((prev) => ({ ...prev, ok: false, error: "" }));

    // live validation for other fields
    if (key === "firstName") {
      setErrors((prev) => ({
        ...prev,
        firstName: raw.trim() ? (isNameValid(raw) ? "" : "Enter valid First Name (letters only)") : "First Name is required",
      }));
    }
    if (key === "lastName") {
      setErrors((prev) => ({
        ...prev,
        lastName: raw.trim() ? (isNameValid(raw) ? "" : "Enter valid Last Name (letters only)") : "Last Name is required",
      }));
    }
    if (key === "email") {
      setErrors((prev) => ({
        ...prev,
        email: raw.trim() ? (isEmailValid(raw) ? "" : "Enter valid Email address") : "Email is required",
      }));
    }
    if (key === "property") {
      setErrors((prev) => ({
        ...prev,
        property: raw.trim() ? "" : "Select Property",
      }));
    }
  };

  // keep errors in sync (optional safety)
  useEffect(() => {
    setErrors((prev) => ({ ...prev, ...validateAll(form) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.property]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mark all as touched
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      property: true,
      message: true,
    });

    const nextErrors = validateAll(form);
    setErrors(nextErrors);

    if (hasAnyError(nextErrors)) {
      setStatus({ loading: false, ok: false, error: "Please fix the highlighted fields." });
      return;
    }

    try {
      setStatus({ loading: true, ok: false, error: "" });

      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        property: form.property.trim(),
        message: form.message.trim(),
      };

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus({ loading: false, ok: true, error: "" });
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        property: "",
        message: "",
      });
      setTouched({
        firstName: false,
        lastName: false,
        phone: false,
        email: false,
        property: false,
        message: false,
      });
      setErrors({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        property: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        ok: false,
        error: error?.message || "Email failed",
      });
    }
  };

  const isSubmitDisabled = () => {
    const nextErrors = validateAll(form);
    return status.loading || hasAnyError(nextErrors);
  };

  return (
    <div ref={topRef} className="bg-white">
      <section className="-mt-20 bg-white px-6 pt-28 pb-16 text-gray-900">
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
                    backgroundImage: `url('https://images.unsplash.com/photo-${
                      index === 0 ? "1529429617124" : index === 1 ? "1502672260266" : "1479839672679"
                    }-aee711a70412?auto=format&fit=crop&w=600&q=80')`,
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
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.35em] text-[#d1a75e]">
              Established in 2002
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-4xl font-semibold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
                BuildCon is India&apos;s finest luxury real estate developer and operator.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base text-gray-800 font-medium">
              Renowned for its leadership and excellence in the real estate sector, BuildCon has delivered over 35
              million sq. ft. with another 43 million sq. ft. underway across multi-asset classes.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={scrollToForm}
                className="rounded-full border border-[#d1a75e]/50 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] px-5 py-2 text-sm font-semibold text-white tracking-[0.3em] hover:from-[#b8924b] hover:to-[#d1a74f] transition-all"
              >
                ENQUIRE NOW
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={scrollToTop}
                className="rounded-full border border-[#d1a75e]/50 bg-[#d1a75e]/20 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-[#d1a75e]/30 transition-colors"
                aria-label="Scroll to top"
              >
                ↑
              </motion.button> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#faf9f6] to-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-sm tracking-[0.3em] uppercase text-[#d1a75e] mb-4">
              Our Offices
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]">
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
                className="h-full rounded-3xl border border-[#d1a75e]/30 bg-white p-6 shadow-lg shadow-[#d1a75e]/10"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold text-gray-900 mb-4"
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
                  className="mt-5 text-sm font-semibold text-gray-800"
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
                  className="text-sm text-[#d1a75e] hover:text-[#b8924b] transition-colors block mt-2 font-medium"
                >
                  {office.email}
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#faf9f6] to-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-[#d1a75e]">
                Send an Enquiry
              </motion.p>

              <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d1a74f] to-[#b8924b]">
                Connect with our concierge desk.
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-4 text-sm text-[#d1a75e]">
                Share your intent and our advisors will curate site visits, investment decks, and bespoke proposals
                within 24 hours.
              </motion.p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="space-y-4 rounded-3xl border border-[#d1a75e]/30 bg-white p-6 shadow-lg shadow-[#d1a75e]/10"
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
                  <span className="text-xs uppercase tracking-[0.25em] text-[#d1a75e] mb-1">{entry.label}</span>

                  <motion.a
                    href={`mailto:${entry.value}`}
                    whileHover={{ x: 5, color: "#f9d891" }}
                    className="text-lg font-semibold text-gray-900 transition-colors"
                  >
                    {entry.value}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="rounded-3xl border border-[#d1a75e]/30 bg-white p-6 shadow-lg shadow-[#d1a75e]/10"
          >
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {status.error ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {status.error}
                </div>
              ) : null}

              {status.ok ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  Enquiry submitted successfully. We&apos;ve emailed you and our admin team.
                </div>
              ) : null}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={onChange("firstName")}
                    onBlur={() => setFieldTouched("firstName")}
                    className="w-full rounded-2xl border border-[#d1a75e]/30 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                  />
                  {fieldError("firstName") ? (
                    <p className="mt-2 text-xs text-red-300">{fieldError("firstName")}</p>
                  ) : null}
                </div>

                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={onChange("lastName")}
                    onBlur={() => setFieldTouched("lastName")}
                    className="w-full rounded-2xl border border-[#d1a75e]/30 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                  />
                  {fieldError("lastName") ? (
                    <p className="mt-2 text-xs text-red-300">{fieldError("lastName")}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    placeholder="Mobile (10 digits)"
                    value={form.phone}
                    onChange={onChange("phone")}
                    onBlur={() => setFieldTouched("phone")}
                    inputMode="numeric"
                    maxLength={10}
                    pattern="\d{10}"
                    className="w-full rounded-2xl border border-[#d1a75e]/30 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                  />
                  {fieldError("phone") ? (
                    <p className="mt-2 text-xs text-red-300">{fieldError("phone")}</p>
                  ) : null}
                </div>

                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    className="w-full rounded-2xl border border-[#d1a75e]/30 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                  />
                  {fieldError("email") ? (
                    <p className="mt-2 text-xs text-red-300">{fieldError("email")}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  value={form.property ? form.property : "default"}
                  onChange={onChange("property")}
                  onBlur={() => setFieldTouched("property")}
                  className="w-full rounded-2xl border border-[#d1a75e]/30 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20"
                >
                  <option value="default" disabled className="bg-[#1a2332] text-[#d1a75e]">
                    Select Property
                  </option>

                  {propertyOptions.map((option) => (
                    <option key={option} value={option} className="bg-gray-50 text-gray-900">
                      {option}
                    </option>
                  ))}
                </motion.select>
                {fieldError("property") ? (
                  <p className="mt-2 text-xs text-red-300">{fieldError("property")}</p>
                ) : null}
              </div>

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={4}
                placeholder="Tell us about your requirement"
                value={form.message}
                onChange={onChange("message")}
                onBlur={() => setFieldTouched("message")}
                className="w-full rounded-2xl border border-[#d1a75e]/30 bg-black/50 px-4 py-3 text-sm text-[#f0d3a3] placeholder:text-[#d1a75e]/50 focus:border-[#d1a75e] focus:outline-none focus:ring-2 focus:ring-[#d1a75e]/20 resize-none"
              />

              <motion.button
                whileHover={{ scale: status.loading ? 1 : 1.05, y: status.loading ? 0 : -2 }}
                whileTap={{ scale: status.loading ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitDisabled()}
                className={`w-full rounded-full bg-gradient-to-r from-[#d1a74f] to-[#b8924b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d1a75e]/30 transition-all hover:from-[#b8924b] hover:to-[#d1a74f] md:w-auto ${
                  isSubmitDisabled() ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status.loading ? "Submitting..." : "Submit"}
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
            className="rounded-3xl border border-[#d1a75e]/20 bg-[#1a2a3a]/90 p-4 shadow-lg shadow-[#d1a75e]/10"
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
