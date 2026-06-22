import React, { useMemo } from "react";
import BlogCard from "./BlogCard";
import PageWrapper from "./PageWrapper";
import Goals from "./blogs/blogImg/Goals.jpeg"
import Git from "./blogs/blogImg/Git.png"
import matter from "gray-matter";

function Blogs() {
  const dynamicBlogs = useMemo(() => {
    try {
      const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default', eager: true });
      const blogs = [];
      
      for (const path in modules) {
        const rawMarkdown = modules[path];
        // Extract filename without extension to use as slug
        const slug = path.split('/').pop().replace('.md', '');
        
        try {
          const { data } = matter(rawMarkdown);
          if (data.title) {
             blogs.push({
               slug,
               title: data.title,
               description: data.description || "Read more...",
               image: data.image || "",
               date: data.date || ""
             });
          }
        } catch (err) {
          console.error(`Error parsing markdown frontmatter for ${path}`, err);
        }
      }
      
      return blogs;
    } catch (error) {
      console.error("Error loading markdown files", error);
      return [];
    }
  }, []);

  return (
    <PageWrapper>
      <div className="bg-black min-h-screen">
    <section id="blogs" className="text-white w-[90%] md:w-[65%] mx-auto">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold scroll-mt-24 font-oswald text-center">Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
        <BlogCard title="My Bucket List / Goals"
        content="Just a few of the things I want to achieve and am fascinated by."
        link="/blog1" 
        image={Goals}/>
        <BlogCard title="Git & GitHub Basics"
        content="Just a learning guide for those who are new to git."
        link="/blog2"
        image={Git} />

        {/* Dynamically loaded markdown blogs */}
        {dynamicBlogs.map((blog) => (
          <BlogCard 
            key={blog.slug}
            title={blog.title}
            content={blog.description}
            link={`/blog/${blog.slug}`}
            image={blog.image}
          />
        ))}
      </div>
    </section>
    </div>
    </PageWrapper>
  );
}

export default Blogs;
