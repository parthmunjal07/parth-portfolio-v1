// components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, content, link, image}) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 m-4 hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt="" />
      <h1 className="text-3xl">{title}</h1>
      <p>{content}</p>

      <Link to={link} className="inline-flex items-center gap-2 mt-2">
        <span className="hover:underline">Read more</span>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
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
