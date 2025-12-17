import React from "react";
import PageWrapper from "../PageWrapper";
import PostCard from "../PostCard";

export default function CodingCons() {
  const posts = [
    {
      image: "/src/assets/day-0.jpg",
      caption: "Day 0 of posting daily about coding & consistency 🚀",
      date: "Day 0 • 14 Dec 2025",
      postLink: "https://www.instagram.com/p/DSO-OSWD-9t/",
    },
    {
      image: "/src/assets/Day-1.png",
      caption: "Explained arrays in Java with real examples 💻",
      date: "Day 1 • 15 Dec 2025",
      postLink: "https://www.instagram.com/p/DSRmMdAD2Ir/?img_index=1",
    },
    {
      image: "/src/assets/Day-2.png",
      caption: "Day 2 of posting daily about coding & consistency 🚀",
      date: "Day 2 • 16 Dec 2025",
      postLink: "https://www.instagram.com/p/DSS_3-uE0BN/",
    },
    {
      image: "/src/assets/Day-3.png",
      caption: "Day 3 of posting daily about coding & consistency 🚀",
      date: "Day 3 • 17 Dec 2025",
      postLink: "https://www.instagram.com/p/DSVffW5E7no/",
    },
  ];
  return (
    <PageWrapper>
      <div className="bg-gray-700 w-[90%] md:w-[65%] mx-auto p-8">
        <div className="mt-16">
          <h1 className="text-4xl text-center font-bold leading-tight">
            My Consistently Coding Challenge
          </h1>
          <p className="text-xl text-center">Code. Post. Grind. Repeat.</p>
          <hr className="bg-gray-500" />
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
