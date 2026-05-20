import React from "react";
import ProjectCard from "./ProjectCard";
import cafeMate from "../assets/cafeMate.png";
import eventify from "../assets/eventify.png";
import portfolio from "../assets/portfolio.png";
import PageWrapper from "./PageWrapper";
import swiftpolls from "../assets/swiftpolls.png";
import soon from "../assets/soon.png";

function Projects() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <div className="flex flex-col justify-center w-[90%] md:w-[65%] mx-auto text-white">
          <div className="w-full text-center mt-25 mb-10">
            <h1 className="text-5xl font-bold font-oswald">My Projects</h1>
          </div>
          <hr className="text-gray-700 font-bold mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              name="Portfolio-v1"
              description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
              image={portfolio}
              liveLink="https://parth-portfolio-v1.vercel.app/"
              githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
            />
            <ProjectCard
              name="SwiftPolls"
              description="SwiftPolls is a dynamic, full-stack web application designed to facilitate seamless real-time audience engagement and asynchronous feedback collection."
              image={swiftpolls}
              liveLink="https://swiftpolls.parthmunjal.in"
              githubLink="https://github.com/parthmunjal07/swiftpolls"
              status="completed"
            />
            <ProjectCard
              name="Somnia Forms"
              description="A production-style form builder SaaS where users can create dynamic forms, publish shareable form links and collect responses...."
              image={soon}
              liveLink="#"
              githubLink="https://github.com/parthmunjal07/Somnia-forms-trpc"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Projects;
