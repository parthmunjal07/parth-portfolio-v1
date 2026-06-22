import React from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../assets/portfolio.png";
import meridian from "../assets/meridian.png"
import somnia from "../assets/somnia.png"
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
              name="ShipFlowAI"
              description="End to End Coding with AI"
              image={soon}
              liveLink="https://meridian.parthmunjal.in/"
              githubLink="https://github.com/parthmunjal07/meridian"
              status="In Progress"
              techStack={["NextJS", "tRPC", "OpenAI", "Postgres"]}
              />
            <ProjectCard
              name="Meridian"
              description="Meridian is a high-performance, email and calendar client that implements autonomous agents to execute complex scheduling and messaging workflows via natural language...."
              image={meridian}
              liveLink="https://meridian.parthmunjal.in/"
              githubLink="https://github.com/parthmunjal07/meridian"
              status="completed"
              techStack={["NextJS", "Corsair", "OpenAI", "Postgres"]}
              />
            <ProjectCard
                name="Somnia Forms"
                description="A production-style form builder SaaS where users can create dynamic forms, publish shareable form links and collect responses... Inspired from TypeForm with with my own taste."
                image={somnia}
                liveLink="https://somniaforms.parthmunjal.in"
                githubLink="https://github.com/parthmunjal07/Somnia-forms-trpc"
                status="completed"
                techStack={["NextJS", "tRPC", "Express", "Postgres"]}
            />
            <ProjectCard
              name="SwiftPolls"
              description="SwiftPolls is a dynamic, full-stack web application designed to facilitate seamless real-time audience engagement and asynchronous feedback collection."
              image={swiftpolls}
              liveLink="https://swiftpolls.parthmunjal.in"
              githubLink="https://github.com/parthmunjal07/swiftpolls"
              status="completed"
              techStack={["React", "WebSockets", "Node.js", "Express", "Postgres"]}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Projects;
