import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-wrap justify-center w-[65%] mx-auto">
      <div className="w-full text-center my-20">
        <h1 className="text-5xl font-bold">My Projects</h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <ProjectCard
          name="Portfolio-v1"
          description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
        />
        <ProjectCard
          name="Cafe-Mate"
          description="An online prototype for a canteen management system for colleges where students can order food online from their phones and collect it from the counter without waiting in long queues..."
          liveLink="#"
          githubLink="https://github.com/parthmunjal07/CafeMate"
        />
      </div>
    </div>
  );
}

export default Projects;
