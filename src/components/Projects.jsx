import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col justify-center w-[65%] mx-auto">
      <div className="w-full text-center my-20">
        <h1 className="text-5xl font-bold">My Projects</h1>
      </div>
      <div className="flex justify-between">
        <ProjectCard
          name="Portfolio-v1"
          description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
          image="src/assets/portfolio.png"
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
        />
        <ProjectCard
          name="Cafe-Mate"
          description="An online prototype for a canteen management system for colleges where students can order food online from their phones and collect it from the counter without waiting in long queues..."
          image="src/assets/cafeMate.png"
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/CafeMate"
        />
      </div>
      <div className="flex justify-between">
        <ProjectCard
          name="eventify"
          description="An all-in-one event tracking web application that helps college clubs and students to manage and keep track of various events happening in the college..."
          image="src/assets/eventify.png"
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/Eventify-Event-Tracker"
        />
      </div>
    </div>
  );
}

export default Projects;
