import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section id="blogs" className="bg-gray-700 text-white w-[90%] md:w-[65%] mx-auto">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold scroll-mt-24">Blogs</h1>
      </div>
      <div>
        <BlogCard title="My Bucket List / Goals"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog1" />
      </div>
    </section>
  );
}

export default Blogs;
