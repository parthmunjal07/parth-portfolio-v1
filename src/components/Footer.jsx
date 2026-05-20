// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t border-gray-800 flex flex-col items-center justify-center z-10 relative">
      <p className="text-gray-400 font-inter text-sm md:text-base">
        Designed & Built by{" "}
        <a
          href="https://github.com/parthmunjal07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-blue-400 transition-colors"
        >
          Parth Munjal
        </a>
      </p>
      <p className="text-gray-600 font-inter text-xs mt-2">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;