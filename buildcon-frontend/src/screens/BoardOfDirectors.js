import React, { useEffect } from "react";
import { motion } from "framer-motion";

// ✅ Your local image
import vishalSir from "../assets/OurLeaders/Vishal Sir.jpeg";

const placeholder =
  "https://images.unsplash.com/photo-1520975958225-d3f06d0b1d08?w=800";

const directors = [
  {
    name: "Mr. Vishal Pawar",
    role: "Chairman",
    img: vishalSir,
  },
  {
    name: "Mr. Example Director",
    role: "Managing Director and CEO",
    img: placeholder,
  },
  {
    name: "Mr. Example Director",
    role: "Non-executive, Non-independent Director",
    img: placeholder,
  },
  {
    name: "Ms. Example Director",
    role: "Whole-time Director",
    img: placeholder,
  },
  {
    name: "Mr. Example Director",
    role: "Independent Director",
    img: placeholder,
  },
  {
    name: "Ms. Example Director",
    role: "Independent Director",
    img: placeholder,
  },
  {
    name: "Mr. Example Director",
    role: "Independent Director",
    img: placeholder,
  },
  {
    name: "Ms. Example Director",
    role: "Independent Director",
    img: placeholder,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: "easeOut" },
  }),
};

const BoardOfDirectors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full bg-white text-black min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-10 md:pt-14">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-medium tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Board of directors
        </motion.h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 md:py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16"
        >
          {directors.map((d, i) => (
            <motion.div
              key={`${d.name}-${i}`}
              custom={i + 1}
              variants={fadeUp}
              className="w-full"
            >
              {/* Image */}
              <div className="w-full">
                <div className="w-full aspect-[4/3] bg-[#d9d9d9] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = placeholder;
                    }}
                  />
                </div>
              </div>

              {/* Name + Role */}
              <div className="mt-5">
                <p className="text-[15px] md:text-[16px] font-medium text-black">
                  {d.name}
                </p>
                <p className="mt-1 text-[13px] md:text-[13px] text-[#b08a2e]">
                  {d.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
