import React from "react";

export default function PostCard({ image, caption, date, postLink }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt="Instagram Post"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-500">{date}</p>

        <p className="text-gray-800 text-lg line-clamp-3">{caption}</p>
        
        <a
          href={postLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm font-medium text-pink-600 hover:underline"
        >
          View on Instagram →
        </a>
      </div>
    </div>
  );
}
