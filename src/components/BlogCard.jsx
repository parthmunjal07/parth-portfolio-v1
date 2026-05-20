// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, content, link, image }) {
  return (
    <div className="border-2 border-gray-600 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col bg-white/5 hover:bg-white/10">
      <img src={image} alt={title} className="rounded-xl w-full h-48 object-cover" />
      <h1 className="text-2xl font-bold mt-4 font-inter">{title}</h1>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed">{content}</p>

      {/* mt-auto pushes the link to the very bottom so they always align */}
      <Link to={link} className="inline-flex items-center gap-2 mt-auto pt-4 text-blue-400 hover:text-blue-300 transition-colors w-fit">
        <span className="hover:underline font-semibold text-sm">Read more</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
}