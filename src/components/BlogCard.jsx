import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <div className="border-2 border-gray-300 w-[30%] rounded-lg p-4 m-4 hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-3xl">{props.title}</h1>
      <p>{props.content}</p>
      <Link to={props.link}>
        Read more{" "}
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
}
