import React from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpeg";
import PageWrapper from "./PageWrapper";
import PostCard from "./PostCard";
import ExpTog from "./ExpTog";
import ProjectCard from "./ProjectCard";
import swiftpolls from "../assets/swiftpolls.png";
import soon from "../assets/soon.png";
import eventify from "../assets/eventify.png";
import { motion } from "framer-motion";

// Skills segregated by category
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        link: "https://react.dev/",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org/",
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", // White icon
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        link: "https://nodejs.org/",
        icon: "https://cdn.simpleicons.org/nodedotjs/339933",
      },
      {
        name: "Express",
        link: "https://expressjs.com/",
        icon: "https://cdn.simpleicons.org/express/ffffff", // White icon
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        icon: "https://cdn.simpleicons.org/mongodb/47A248",
      },
      {
        name: "Postgres",
        link: "https://www.postgresql.org/",
        icon: "https://cdn.simpleicons.org/postgresql/4169E1",
      },
    ],
  },
  {
    title: "Utilities",
    skills: [
      {
        name: "Sockets",
        link: "https://socket.io/",
        icon: "https://cdn.simpleicons.org/socketdotio/ffffff", // White icon
      },
    ],
  },
];

function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white">
        <div className="h-full w-[90%] md:w-[65%] mx-auto flex justify-center text-center">
          <div className="mt-25 flex flex-col gap-4 items-center ">
            <img
              src={profile2}
              alt="Parth Munjal — profile"
              className="w-[100px] rounded-full"
            />

            <h1 className="text-4xl font-jetbrainsmono">
              Hi, I'm{" "}
              <span className="font-bold underline italic">Parth Munjal</span>
            </h1>

            <p className="text-2xl w-3/4 font-inter text-gray-200">
              I'm building and learning about FullStack Web Applications
            </p>

            {/* CATEGORIZED SKILLSET SECTION */}
            <div className="mt-10 flex flex-col items-center w-full font-inter">
              <h1 className="text-3xl font-bold mb-8">Skillset</h1>

              {/* UPDATED: Changed flex-col to flex-wrap and widened max-w */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center items-start gap-10 md:gap-12 w-full max-w-4xl"
              >
                {skillCategories.map((category) => (
                  <div
                    key={category.title}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {category.skills.map((skill) => (
                        <motion.a
                          key={skill.name}
                          variants={card}
                          whileHover={{ y: -4, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-colors skill-inner-shadow cursor-pointer"
                        >
                          <img
                            src={skill.icon}
                            alt={`${skill.name} logo`}
                            className="w-5 h-5"
                          />
                          <span className="text-sm font-medium tracking-wide">
                            {skill.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-12 font-inter w-full">
              <h1 className="text-3xl font-bold mb-6">Experience</h1>
              <ExpTog />
            </div>

            <h1 className="font-inter text-3xl font-bold mt-10 mb-4">
              Featured Projects
            </h1>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={card} whileHover={{ y: -8 }}>
                <ProjectCard
                  name="SwiftPolls"
                  description="SwiftPolls is a dynamic, full-stack web application designed to facilitate seamless real-time audience engagement and asynchronous feedback collection."
                  image={swiftpolls}
                  liveLink="https://swiftpolls.parthmunjal.in"
                  githubLink="https://github.com/parthmunjal07/swiftpolls"
                  status="completed"
                />
              </motion.div>

              <motion.div variants={card} whileHover={{ y: -8 }}>
                <ProjectCard
                  name="Somnia Forms"
                  description="A production-style form builder SaaS where users can create dynamic forms, publish shareable form links and collect responses...."
                  image={soon}
                  liveLink="#"
                  githubLink="https://github.com/parthmunjal07/Somnia-forms-trpc"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white/10 rounded-lg font-inter text-lg tracking-wide hover:bg-white/20 hover:border-white/30 border border-transparent transition-all"
              >
                View More →
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Hero;