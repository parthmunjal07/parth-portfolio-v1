import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IIC from "./orgIcons/iic.jpg";
import CS from "./orgIcons/cs.jpg";

const professionalData = [];

const communityData = [
  {
    icon: IIC,
    title: "Member & Contributor",
    org: "Institution's Innovation Council JC Bose UST",
    desc: "Helping and contributing in workshops and projects...",
    year: "Nov 2025 – Present",
  },
  {
    icon: CS,
    title: "Member",
    org: "COLLEGEsociety",
    desc: "Consistently contributing to online workshops...",
    year: "June 2025 – Present",
  },
];

export default function ExpTog() {
  const [active, setActive] = useState("professional");

  const data = active === "professional" ? professionalData : communityData;

  return (
    <section className="mt-7 text-white">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-10">
        <div className="bg-zinc-900 p-1 rounded-full flex gap-2 relative">
          {/* Sliding indicator */}
          <motion.div
            layout
            className="absolute top-1 bottom-1 w-1/2 bg-gray-500 rounded-full"
            initial={false}
            animate={{
              x: active === "professional" ? "0%" : "100%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          <button
            onClick={() => setActive("professional")}
            className={`px-6 py-2 z-10 rounded-full hover:cursor-pointer ${
              active === "professional" ? "text-white" : "text-gray-400"
            }`}
          >
            Professional
          </button>

          <button
            onClick={() => setActive("community")}
            className={`px-6 py-2 z-10 rounded-full hover:cursor-pointer ${
              active === "community" ? "text-white" : "text-gray-400"
            }`}
          >
            Community
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {data.length === 0 ? (
              <div className="py-2">
                <p className="text-gray-400 text-lg">
                  {active === "professional"
                    ? "No professional experience yet. Currently building and learning..."
                    : "No community activity added yet. Stay tuned as I start contributing and sharing my journey."}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-10 items-stretch">
                {data.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-zinc-900 w-full p-6 rounded-xl border border-zinc-800 hover:border-gray-500 transition"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={item.icon}
                        alt={item.org}
                        className="size-11 rounded-2xl mb-3"
                      />

                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-blue-400 text-sm">{item.org}</p>
                      <p className="text-gray-400 mt-2">{item.desc}</p>
                      <p className="text-gray-500 text-sm mt-3">{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
