import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-wrap justify-center">
      <ProjectCard
        name="Portfolio-v1"
        description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
        liveLink="#"
        githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
      />
    </div>
  );
}

export default Projects;
