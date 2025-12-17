import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


// ===== HERO SLIDER IMAGES =====
import saiDwarikaHero from "../assets/Sai Dwarika/Saidwarika Photo 1.webp";
import saiNagari2 from "../assets/Sai Nagari/Sai Nagari 2.webp";
// import saiNagari3 from "../assets/Sai Nagari/Sai Nagari 3.webp";
// import saiNagari4 from "../assets/Sai Nagari/Sai Nagari 4.webp";
import vrindavanRegency3 from "../assets/Vrindavan/Vrindavan Regency 3.webp";

// ===== SECTION 2 IMAGES =====
import saiDwarikaSection2 from "../assets/Sai Dwarika/Saidwarika Photo 1.webp";
import saiNagari2Section2 from "../assets/Sai Nagari/Sai Nagari 2.webp";
import saiNagari3Section2 from "../assets/Sai Nagari/Sai Nagari 3.webp";
import vrindavanRegency1 from "../assets/Vrindavan/Vrindavan Regency 1.webp";
import vrindavanRegency3Section2 from "../assets/Vrindavan/Vrindavan Regency 3.webp";

// ===== SECTION 3 IMAGES =====
import residentialImg from "../assets/logo1.png";
import officeImg from "../assets/logo2.png";
import hospitalityImg from "../assets/logo3.png";

// ===== SAI DWARIKA ASSETS =====
import saiDwarikaPhoto1 from "../assets/Sai Dwarika/Saidwarika Photo 1.webp";
import saiDwarikaPhoto2 from "../assets/Sai Dwarika/Saidwarika Photo 2.webp";
import saiDwarikaVideo from "../assets/Sai Dwarika/Saidwarika Video.webm";

// ===== SECTION 5 — SERVICES IMAGES =====
const services = [
  {
    title: "Facility Management",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1000",
  },
  {
    title: "Fit-Out Management",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1000",
  },
  {
    title: "Project Management",
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1000",
  },
  {
    title: "Asset Maintenance",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000",
  },
  {
    title: "Security Services",
    image: "https://images.unsplash.com/photo-1581091012184-5c1d34b37dac?w=1000",
  },
];

// ----- SECTION 4 — PROJECTS -----
const projectData = {
  Residential: [
    {
      title: "Shree Shrushti",
      location: "Kondhwa Budruk, Yewalewadi, Pune",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000",
    },
    {
      title: "Sai Dwarika",
      location: "Yewalewadi / Kondhwa Budruk, Pune",
      image: saiDwarikaPhoto1,
      video: saiDwarikaVideo,
    },
    {
      title: "Sadguru Krupa",
      location: "Katraj, Pune",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1000",
    },
    {
      title: "Vrindavan Regency",
      location: "Katraj - Kondhwa Road, Yewalewadi, Pune",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000",
    },
    {
      title: "Sai Shraddha",
      location: "Kondhwa Budruk, Yewalewadi, Pune",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000",
    },
  ],

  "Office Parks": [
    {
      title: "Panchshil Business Park",
      location: "Viman Nagar, Pune",
      image: "https://images.unsplash.com/photo-1526402469434-c1c28a6f1574?w=1000",
    },
    {
      title: "Tech Park One",
      location: "Yerwada, Pune",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000",
    },
    {
      title: "World Trade Center",
      location: "Kharadi, Pune",
      image: "https://images.unsplash.com/photo-1479839684238-9280d0663c58?w=1000",
    },
  ],

  Hospitality: [
    {
      title: "Maa Pranaam Mother & Child Care",
      location: "Chimbali Road, Alandi, Pune",
      image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b?w=1000",
    },
  ],
};

const tabs = ["Residential", "Office Parks", "Hospitality"];

// SECTION 2 images
const sectionImages = [
  saiDwarikaSection2,
  // saiNagari2Section2,
  // saiNagari3Section2,
  vrindavanRegency1,
  vrindavanRegency3Section2,
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

// HERO SLIDES
const slides = [
  {
    image: saiDwarikaHero,
    title: "Sai Dwarika",
    subtitle: "Ready-to-move 1 & 2 BHK residences in the heart of South Pune",
    button: "View Project",
    link: "/projects/sai-dwarika",
  },
  {
    image: saiNagari2,
    title: "Sai Nagari",
    subtitle: "6.75+ Million Sq. Ft. mixed-use transit-oriented district in Katraj, Pune",
    button: "Explore Project",
    link: "/projects/sai-nagari",
  },
  // {
  //   image: saiNagari3,
  //   title: "Sai Nagari",
  //   subtitle: "Transforming urban living with office, retail, and premium residences",
  //   button: "View Details",
  //   link: "/projects/sai-nagari",
  // },
  // {
  //   image: saiNagari4,
  //   title: "Sai Nagari",
  //   subtitle: "A landmark development redefining mixed-use communities",
  //   button: "Learn More",
  //   link: "/projects/sai-nagari",
  // },
  {
    image: vrindavanRegency3,
    title: "Vrindavan Regency",
    subtitle: "A thoughtfully developed residential address for modern Pune living",
    button: "Discover More",
    link: "/projects/vrindavan-regency",
  },
];

// ACCORDION SECTION
const dynamicSections = [
  {
    id: 1,
    title: "Residential",
    image: residentialImg,
    heading: "RESIDENTIAL",
    text: `Our residential developments are crafted with precision, modern design,
    and comfort. Each project reflects quality, luxury, and thoughtful planning.`,
    stats: ["412 Homes Developed", "320 Homes Under Development"],
    link: "/projects/sai-nagari",
  },
  {
    id: 2,
    title: "Office Parks",
    image: officeImg,
    heading: "OFFICE PARKS",
    text: `World-class office environments designed for global business excellence.`,
    stats: ["22.77M sq. ft. Developed", "32.1M sq. ft. Under Development"],
    link: "/projects/office-parks", // ✅ add your route here
  },
  {
    id: 3,
    title: "Hospitality",
    image: hospitalityImg,
    heading: "HOSPITALITY",
    text: `Our hospitality portfolio delivers global standards of design & service.`,
    stats: ["2178 Rooms Developed", "1476 Rooms Under Development"],
    link: "/projects/maa-pranaam-hospitality",
  },
];


const Home = () => {
  const [current, setCurrent] = useState(0);
  const [imagesAnimated, setImagesAnimated] = useState(false);
  const [activeTabAccordion, setActiveTabAccordion] = useState(3);
  const [tabAnimate, setTabAnimate] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("Residential");
  const [hoveredProject, setHoveredProject] = useState(null);

  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  // === SERVICES AUTOSCROLL ===
  const scrollRef = useRef(null);
  const [autoX, setAutoX] = useState(0);

  // 1️⃣ Auto scroll RIGHT → LEFT
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1.4; // speed (premium slow)
      }
    }, 16); // smooth 60fps

    return () => clearInterval(timer);
  }, []);

  // 2️⃣ Infinite Loop Reset
  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  };

  // 3️⃣ Manual Arrows
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  // HERO AUTO SLIDER
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // SECTION 2 SCROLL ANIMATION
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setImagesAnimated(e.isIntersecting)),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ACCORDION FADE
  useEffect(() => {
    setTabAnimate(false);
    const t = setTimeout(() => setTabAnimate(true), 100);
    return () => clearTimeout(t);
  }, [activeTabAccordion]);

  const handleAccordionClick = (id) => {
    setActiveTabAccordion((prev) => (prev === id ? null : id));
  };
  const navigate = useNavigate();


  return (
    <div className="w-full bg-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide.image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/3 left-10 md:left-20"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold max-w-4xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9d891] to-[#d1a74f]">
              {slides[current].title}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 max-w-xl text-[#f0d3a3] text-xl"
          >
            {slides[current].subtitle}
          </motion.p>
          <motion.a
            href={slides[current].link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-7 py-3 text-white text-lg rounded font-semibold"
              style={{
                background: "linear-gradient(135deg, #d1a74f 0%, #b8924b 100%)",
              }}
            >
              ↗ {slides[current].button}
            </motion.button>
          </motion.a>
        </motion.div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((slide, i) => (
            <motion.img
              key={i}
              src={slide.image}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`h-16 w-24 rounded object-cover cursor-pointer border-2 transition-all ${
                current === i
                  ? "border-[#d1a75e] shadow-lg shadow-[#d1a75e]/50"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="w-full bg-black" ref={sectionRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="py-12 text-center"
        >
          <div className="max-w-6xl mx-auto flex justify-center gap-24">
            {[
              { text: "15+ projects", delay: 0 },
              { text: "18 years of legacy", delay: 0.1 },
              { text: "2.50 lakh+ sq. ft. delivered", delay: 0.2 },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="text-3xl font-semibold text-[#f8d99c]"
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative w-full md:w-1/2 h-[430px]"
            >
              {sectionImages.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="absolute w-[45%] rounded shadow-xl shadow-[#d1a75e]/20"
                  style={{
                    left: `${i * 10}%`,
                    bottom: `${i * 8}%`,
                    zIndex: i + 1,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="md:w-1/2"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-semibold mb-6 leading-snug text-[#f7d69a]"
              >
                Established in 2002, <br /> India's finest luxury developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-[#d1a75e] text-lg leading-relaxed"
              >
                Delivering 35M+ sq. ft. with 43M+ sq. ft. under development,
                known for quality, innovation & craftsmanship.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — ACCORDION ================= */}
      <div className="w-full bg-black py-12 px-6 md:px-20">
        {dynamicSections.map((s) => (
          <motion.div
            key={s.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="border-b border-[#d1a75e]/30"
          >
            <motion.div
              onClick={() => handleAccordionClick(s.id)}
              whileHover={{ x: 10 }}
              className="flex justify-between py-6 cursor-pointer text-xl text-[#f0d3a3]"
            >
              <span className="text-[#d1a75e]">{`0${s.id}`}</span>
              <span>{s.title}</span>
              <motion.span
                animate={{ rotate: activeTabAccordion === s.id ? 0 : 90 }}
                transition={{ duration: 0.3 }}
                className="text-[#d1a75e]"
              >
                {activeTabAccordion === s.id ? "–" : "+"}
              </motion.span>
            </motion.div>

            <AnimatePresence>
              {activeTabAccordion === s.id && (
                <motion.div
                  key={`panel-${s.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-[650px] flex items-center justify-center text-white overflow-hidden"
                  style={{
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.98 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-3xl text-center"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-5xl font-semibold mb-6 text-[#f7d69a]"
                    >
                      {s.heading}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg mb-8 text-[#f0d3a3]"
                    >
                      {s.text}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex justify-center gap-12 mb-10 text-lg text-[#d1a75e]"
                    >
                      {s.stats.map((t, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                        >
                          • {t}
                        </motion.p>
                      ))}
                    </motion.div>

                    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="px-8 py-3 bg-gradient-to-r from-[#d1a74f] to-[#b8924b] text-white rounded font-semibold"
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (s.link) navigate(s.link);
  }}
>
  Learn More
</motion.button>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* ================= SECTION 4 — PROJECTS ================= */}
      <div className="w-full bg-black py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[6px] text-[#d1a75e] mb-4"
        >
          WE ARE NOW
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-4xl font-semibold mb-10 text-[#f7d69a]"
        >
          SHAPING SKYLINES BEYOND BORDERS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-12 text-lg mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveProjectTab(tab)}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`pb-2 transition-colors duration-300 ${
                activeProjectTab === tab
                  ? "text-[#f8d99c] border-b-2 border-[#d1a75e]"
                  : "text-[#d1a75e] hover:text-[#f0d3a3]"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeProjectTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6"
        >
          {projectData[activeProjectTab].map((p, i) => {
            const projectKey = `${activeProjectTab}-${i}`;
            const hasVideo = p.video;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative group rounded overflow-hidden"
                onMouseEnter={() => {
                  if (hasVideo) {
                    setHoveredProject(projectKey);
                    const video = videoRefs.current[projectKey];
                    if (video) {
                      video.play().catch(console.error);
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (hasVideo) {
                    setHoveredProject(null);
                    const video = videoRefs.current[projectKey];
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }
                }}
              >
                <div className="relative w-full h-[420px] overflow-hidden">
                  {hasVideo ? (
                    <>
                      <motion.img
                        src={p.image}
                        animate={{ opacity: hoveredProject === projectKey ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <motion.video
                        ref={(el) => (videoRefs.current[projectKey] = el)}
                        src={p.video}
                        loop
                        muted
                        playsInline
                        animate={{ opacity: hoveredProject === projectKey ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </>
                  ) : (
                    <motion.img
                      src={p.image}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold text-[#f7d69a]"
                  >
                    {p.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-[#d1a75e] mt-1"
                  >
                    {p.location}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ================= SECTION 5 — SERVICES (PREMIUM AUTO SLIDER) ================= */}
      <div className="w-full bg-black py-20 relative">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm tracking-[6px] text-[#d1a75e] mb-4"
        >
          EXPLORE
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-4xl font-semibold mb-12 text-[#f7d69a]"
        >
          OUR SERVICES
        </motion.h2>

        {/* LEFT ARROW */}
        <motion.button
          onClick={scrollLeft}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#d1a75e]/20 backdrop-blur-sm border border-[#d1a75e]/50 text-[#f8d99c] p-4 rounded-full z-10 hover:bg-[#d1a75e]/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* RIGHT ARROW */}
        <motion.button
          onClick={scrollRight}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#d1a75e]/20 backdrop-blur-sm border border-[#d1a75e]/50 text-[#f8d99c] p-4 rounded-full z-10 hover:bg-[#d1a75e]/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* INFINITE LOOP SCROLLER */}
        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-10 overflow-x-scroll scrollbar-hide px-10"
        >
          {[...services, ...services].map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % services.length) * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="min-w-[360px] cursor-pointer"
            >
              <motion.img
                src={srv.image}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[380px] object-cover rounded-lg shadow-lg shadow-[#d1a75e]/20"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-4 text-lg font-medium text-[#f0d3a3]"
              >
                {srv.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
