import React from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpeg";
import PageWrapper from "./PageWrapper";
import PostCard from "./PostCard";
import ExpTog from "./ExpTog";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard"; 
import { motion } from "framer-motion";
import gitImg from "./blogs/blogImg/Git.png";
import goalsImg from "./blogs/blogImg/Goals.jpeg";
import somnia from "../assets/somnia.png"
import meridian from "../assets/meridian.png"

// Skills segregated by category
const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E", 
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        icon: "https://cdn.simpleicons.org/typescript/3178C6", 
      },
    ],
  },
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
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
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
        icon: "https://cdn.simpleicons.org/express/ffffff",
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
        icon: "https://cdn.simpleicons.org/socketdotio/ffffff",
      },
      {
        name: "Git",
        link: "https://git-scm.com/",
        icon: "https://cdn.simpleicons.org/git/F05032", 
      },
      {
        name: "GitHub",
        link: "https://github.com/",
        icon: "https://cdn.simpleicons.org/github/ffffff",
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
        <div className="h-full w-[90%] md:w-[75%] lg:w-[65%] mx-auto flex justify-center text-center">
          <div className="mt-25 flex flex-col gap-4 items-center w-full">
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

            {/* SKILLSET SECTION */}
            <div className="mt-10 flex flex-col items-center w-full font-inter">
              <h1 className="text-3xl font-bold mb-8">Skillset</h1>

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

            {/* EXPERIENCE SECTION */}
            <div className="mt-12 font-inter w-full">
              <h1 className="text-3xl font-bold mb-6">Experience</h1>
              <ExpTog />
            </div>

            {/* FEATURED PROJECTS SECTION */}
            <h1 className="font-inter text-3xl font-bold mt-10 mb-6">
              Featured Projects
            </h1>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={card} whileHover={{ y: -8 }}>
                <ProjectCard
              name="Meridian"
              description="Meridian is a high-performance, email and calendar client that implements autonomous agents to execute complex scheduling and messaging workflows via natural language...."
              image={meridian}
              liveLink="https://meridian.parthmunjal.in/"
              githubLink="https://github.com/parthmunjal07/meridian"
              status="completed"
              />
              </motion.div>

              <motion.div variants={card} whileHover={{ y: -8 }}>
                <ProjectCard
                name="Somnia Forms"
                description="A production-style form builder SaaS where users can create dynamic forms, publish shareable form links and collect responses... Inspired from TypeForm with with my own taste."
                image={somnia}
                liveLink="https://somniaforms.parthmunjal.in"
                githubLink="https://github.com/parthmunjal07/Somnia-forms-trpc"
                status="completed"
            />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center"
            >
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white/10 rounded-lg font-inter text-lg tracking-wide hover:bg-white/20 hover:border-white/30 border border-transparent transition-all"
              >
                View All Projects →
              </motion.a>
            </motion.div>

            {/* ✅ NEW: FEATURED BLOGS SECTION */}
            <h1 className="font-inter text-3xl font-bold mt-20 mb-6">
              Latest Blogs
            </h1>
            
            {/* The grid is set to md:grid-cols-3 to show 3 in a row on desktop */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >

              <motion.div variants={card} whileHover={{ y: -8 }}>
                <BlogCard
                  title="Git & GitHub Basics"
                  content="A comprehensive guide to understanding version control using Git and GitHub for beginners."
                  link="/blog2"
                  image={gitImg}
                />
              </motion.div>

              <motion.div variants={card} whileHover={{ y: -8 }}>
                <BlogCard
                  title="My Bucket List"
                  content="Just a few of the things I want to achieve and am fascinated by."
                  link="/blog1"
                  image={goalsImg}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center mb-16"
            >
              <motion.a
                href="/blogs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white/10 rounded-lg font-inter text-lg tracking-wide hover:bg-white/20 hover:border-white/30 border border-transparent transition-all"
              >
                Read All Blogs →
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Hero;