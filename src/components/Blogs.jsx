import React from "react";
import BlogCard from "./BlogCard";
import PageWrapper from "./PageWrapper";
import Goals from "./blogs/blogImg/Goals.jpeg"
import Git from "./blogs/blogImg/Git.png"

function Blogs() {
  return (
    <PageWrapper>
      <div className="bg-black min-h-screen">
    <section id="blogs" className="text-white w-[90%] md:w-[65%] mx-auto">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold scroll-mt-24 font-oswald text-center">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 font-inter">
        <BlogCard title="My Bucket List / Goals"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog1" 
        image={Goals}/>
        <BlogCard title="My learning on Git"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog3"
        image={Git} />
        <BlogCard title="My Consistently coding challenge"
        content="Just tried out a challenge."
        link="/blog2" />
      </div>
    </section>
    </div>
    </PageWrapper>
  );
}

export default Blogs;
