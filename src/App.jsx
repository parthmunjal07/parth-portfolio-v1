import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogCard from "./components/BlogCard";
import Blog1 from "./components/blogs/Blog1";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog1" element={<Blog1 />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
