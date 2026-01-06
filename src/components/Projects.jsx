import React from "react";
import ProjectCard from "./ProjectCard";
import cafeMate from "../assets/cafeMate.png";
import eventify from "../assets/eventify.png";
import portfolio from "../assets/portfolio.png";
import PageWrapper from "./PageWrapper";

function Projects() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
    <div className="flex flex-col justify-center w-[90%] md:w-[65%] mx-auto text-white">
      <div className="w-full text-center mt-25 mb-10">
        <h1 className="text-5xl font-bold font-oswald">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ProjectCard
          name="Portfolio-v1"
          description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
          image={portfolio}
          liveLink="https://parth-portfolio-v1.vercel.app/"
          githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
        />
        <ProjectCard
          name="Cafe-Mate"
          description="An online prototype for a canteen management system for colleges where students can order food online from their phones and collect it from the counter without waiting in long queues..."
          image={cafeMate}
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/CafeMate"
        />
        <ProjectCard
          name="Eventify"
          description="An all-in-one event tracking web application that helps college clubs and students to manage and keep track of various events happening in the college..."
          image={eventify}
          liveLink="https://eventify-event-tracker.vercel.app/"
          githubLink="https://github.com/parthmunjal07/Eventify-Event-Tracker"
        />
      </div>
    </div>
    </div>
    </PageWrapper>
  );
}

export default Projects;
