import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import PageWrapper from "./PageWrapper";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Import all markdown files as raw text
    const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default', eager: true });
    
    // Find the matching file based on the slug
    const targetFile = `/src/content/blogs/${slug}.md`;
    const rawMarkdown = modules[targetFile];

    if (rawMarkdown) {
      try {
        // Parse frontmatter
        const { data, content } = matter(rawMarkdown);
        setBlogData({ data, content });
      } catch (err) {
        console.error("Failed to parse markdown", err);
        setError(true);
      }
    } else {
      setError(true);
    }
  }, [slug]);

  if (error) {
    return (
      <PageWrapper>
        <div className="bg-black min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold font-oswald mb-4">Blog Not Found</h1>
            <button 
              onClick={() => navigate('/blogs')}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Return to Blogs
            </button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (!blogData) {
    return (
      <PageWrapper>
        <div className="bg-black min-h-screen flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      </PageWrapper>
    );
  }

  const { data, content } = blogData;

  return (
    <PageWrapper>
      <div className="bg-black min-h-screen">
        <article className="w-[90%] md:w-[65%] mx-auto p-8 pt-24 text-white">
          <button 
            onClick={() => navigate('/blogs')}
            className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors"
          >
            ← Back to blogs
          </button>
          
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-oswald font-bold leading-tight mb-4">
              {data.title}
            </h1>
            {data.date && (
              <p className="text-gray-400 font-inter">{data.date}</p>
            )}
            {data.image && (
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-[400px] object-cover rounded-2xl mt-8 border-2 border-gray-800"
              />
            )}
          </div>
          
          <hr className="border-gray-800 mb-10" />

          {/* The prose classes apply beautiful typography styles from Tailwind */}
          <div className="prose prose-invert prose-lg max-w-none font-inter">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </PageWrapper>
  );
}

export default BlogPage;
