import React, { useEffect, useState, useRef } from "react";

// ===== HERO SLIDER IMAGES =====
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";

// ===== SECTION 2 IMAGES =====
import picture4 from "../assets/picture4.jpg";
import picture5 from "../assets/picture5.jpg";
import picture6 from "../assets/picture6.jpg";

// ===== SECTION 3 IMAGES =====
import residentialImg from "../assets/logo1.png";
import officeImg from "../assets/logo2.png";
import hospitalityImg from "../assets/logo3.png";

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
      title: "Omnia Residences",
      location: "Almeida Park, Bandra West, Mumbai",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1000",
    },
    {
      title: "Trump Towers",
      location: "Kalyani Nagar, Pune",
      image:
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=1000",
    },
    {
      title: "YOO Villas",
      location: "Near EON Free Zone, Kharadi, Pune",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1000",
    },
  ],

  "Office Parks": [
    {
      title: "Panchshil Business Park",
      location: "Viman Nagar, Pune",
      image:
        "https://images.unsplash.com/photo-1526402469434-c1c28a6f1574?w=1000",
    },
    {
      title: "Tech Park One",
      location: "Yerwada, Pune",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000",
    },
    {
      title: "World Trade Center",
      location: "Kharadi, Pune",
      image:
        "https://images.unsplash.com/photo-1479839684238-9280d0663c58?w=1000",
    },
  ],

  Hospitality: [
    {
      title: "The Ritz Carlton",
      location: "Yerwada, Pune",
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101b?w=1000",
    },
    {
      title: "JW Marriott",
      location: "Senapati Bapat Road, Pune",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000",
    },
    {
      title: "Courtyard by Marriott",
      location: "Hinjawadi, Pune",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000",
    },
  ],
};

const tabs = ["Residential", "Office Parks", "Hospitality"];

// SECTION 2 images
const sectionImages = [picture4, picture5, picture6];

// HERO SLIDES
const slides = [
  {
    image: picture1,
    title: "YOO Villas: Gated Community Living",
    subtitle: "Experience ultra-luxury lifestyle",
    button: "Learn More",
    link: "/projects#villas",
  },
  {
    image: picture2,
    title: "Premium Office Spaces for Future Leaders",
    subtitle: "Designed for productivity & growth",
    button: "Explore Offices",
    link: "/projects#offices",
  },
  {
    image: picture3,
    title: "Luxury Homes Crafted With Excellence",
    subtitle: "Live the life you deserve",
    button: "View Residences",
    link: "/projects#homes",
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
  },
  {
    id: 2,
    title: "Office Parks",
    image: officeImg,
    heading: "OFFICE PARKS",
    text: `World-class office environments designed for global business excellence.`,
    stats: ["22.77M sq. ft. Developed", "32.1M sq. ft. Under Development"],
  },
  {
    id: 3,
    title: "Hospitality",
    image: hospitalityImg,
    heading: "HOSPITALITY",
    text: `Our hospitality portfolio delivers global standards of design & service.`,
    stats: ["2178 Rooms Developed", "1476 Rooms Under Development"],
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [imagesAnimated, setImagesAnimated] = useState(false);
  const [activeTabAccordion, setActiveTabAccordion] = useState(3);
  const [tabAnimate, setTabAnimate] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("Residential");

  const sectionRef = useRef(null);

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
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // SECTION 2 SCROLL ANIMATION
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => setImagesAnimated(e.isIntersecting)),
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

  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`absolute inset-0 w-full h-full object-cover transition duration-[1500ms] ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute top-1/3 left-10 md:left-20">
          <h1 className="text-white text-5xl md:text-6xl font-bold max-w-4xl">
            {slides[current].title}
          </h1>
          <p className="mt-3 max-w-xl text-white text-xl opacity-90">
            {slides[current].subtitle}
          </p>
          <a href={slides[current].link}>
            <button
              className="mt-6 px-7 py-3 text-white text-lg rounded"
              style={{ background: "#E1272D" }}
            >
              ↗ {slides[current].button}
            </button>
          </a>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              className={`h-16 w-24 rounded object-cover cursor-pointer border ${
                current === i ? "border-white" : "border-transparent"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="w-full bg-white" ref={sectionRef}>
        <div className="py-12 text-center text-3xl font-semibold">
          <div className="max-w-6xl mx-auto flex justify-center gap-24">
            <p>55 projects</p>
            <p>23 years of legacy</p>
            <p>35M sq. ft. delivered</p>
          </div>
        </div>

        <div className="bg-[#222222] text-white py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">
            <div className="relative w-full md:w-1/2 h-[430px]">
              {sectionImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className={`absolute w-[50%] rounded shadow-xl transition duration-[1200ms] ${
                    imagesAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{
                    left: `${i * 12}%`,
                    bottom: `${i * 12}%`,
                    zIndex: i + 1,
                  }}
                />
              ))}
            </div>

            <div className="md:w-1/2">
              <h2 className="text-5xl font-semibold mb-6 leading-snug">
                Established in 2002, <br /> India's finest luxury developer
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Delivering 35M+ sq. ft. with 43M+ sq. ft. under development,
                known for quality, innovation & craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — ACCORDION ================= */}
      <div className="w-full bg-white py-12 px-6 md:px-20">
        {dynamicSections.map((s) => (
          <div key={s.id} className="border-b">
            <div
              onClick={() => setActiveTabAccordion(s.id)}
              className="flex justify-between py-6 cursor-pointer text-xl"
            >
              <span>{`0${s.id}`}</span>
              <span>{s.title}</span>
              <span>{activeTabAccordion === s.id ? "–" : "+"}</span>
            </div>

            {activeTabAccordion === s.id && (
              <div
                className="relative w-full h-[650px] flex items-center justify-center text-white"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>

                <div
                  className={`relative max-w-3xl text-center transition duration-[1200ms] ${
                    tabAnimate
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-5xl font-semibold mb-6">{s.heading}</h2>
                  <p className="text-lg mb-8 opacity-90">{s.text}</p>

                  <div className="flex justify-center gap-12 mb-10 text-lg">
                    {s.stats.map((t, i) => (
                      <p key={i}>• {t}</p>
                    ))}
                  </div>

                  <button className="px-8 py-3 bg-white/30 text-white rounded">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= SECTION 4 — PROJECTS ================= */}
      <div className="w-full bg-white py-20">
        <h3 className="text-center text-sm tracking-[6px] text-gray-500">
          WE ARE NOW
        </h3>
        <h2 className="text-center text-4xl font-semibold mb-10">
          SHAPING SKYLINES BEYOND BORDERS
        </h2>

        <div className="flex justify-center gap-12 text-lg mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveProjectTab(tab)}
              className={`pb-2 ${
                activeProjectTab === tab
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {projectData[activeProjectTab].map((p, i) => (
            <div key={i} className="relative group rounded overflow-hidden">
              <img
                src={p.image}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-black/80 text-white">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm opacity-90">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 5 — SERVICES (PREMIUM AUTO SLIDER) ================= */}
      <div className="w-full bg-white py-20 relative">

        <h4 className="text-center text-sm tracking-[6px] text-gray-500">
          EXPLORE
        </h4>
        <h2 className="text-center text-4xl font-semibold mb-12">
          OUR SERVICES
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-4 rounded-full z-10"
        >
          {/* ← */}
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow p-4 rounded-full z-10"
        >
          {/* → */}
        </button>

        {/* INFINITE LOOP SCROLLER */}
        <div
          ref={scrollRef}
          onScroll={handleInfiniteScroll}
          className="flex gap-10 overflow-x-scroll scrollbar-hide px-10"
        >
          {[...services, ...services].map((srv, i) => (
            <div key={i} className="min-w-[360px] cursor-pointer">
              <img
                src={srv.image}
                className="w-full h-[380px] object-cover rounded-lg shadow-lg"
              />
              <p className="text-center mt-4 text-lg font-medium">
                {srv.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
