import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Hero />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/blogs" element={<Blogs />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <ProjectCard
      name="Portfolio-v1"
      description="Version-1 of my personal portfolio website. In this I have tried to maintain the simplicity with focus on content I am providing instead of the animations and stuff..."
      liveLink="#"
      githubLink="https://github.com/parthmunjal07/parth-portfolio-v1"
    />
  );
}

export default App;
