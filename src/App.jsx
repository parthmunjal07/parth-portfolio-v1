import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogCard from "./components/BlogCard";
import Blog1 from "./components/blogs/Blog1";
import Git from "./components/blogs/Git";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen flex flex-col relative w-full overflow-hidden">
        
        <NavBar />
        <SocialLinks />
        
        <main className="grow w-full">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Git />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;