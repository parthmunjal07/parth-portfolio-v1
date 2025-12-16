import React from "react";
import BlogCard from "./BlogCard";
import PageWrapper from "./PageWrapper";

function Blogs() {
  return (
    <PageWrapper>
    <section id="blogs" className="bg-gray-700 text-white w-[90%] md:w-[65%] mx-auto">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold scroll-mt-24">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <BlogCard title="My Bucket List / Goals"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog1" />
        <BlogCard title="My Consistently coding challenge"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog2" />
      </div>
    </section>
    </PageWrapper>
  );
}

export default Blogs;
