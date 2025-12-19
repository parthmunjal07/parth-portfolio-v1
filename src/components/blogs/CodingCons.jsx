import React from "react";
import PageWrapper from "../PageWrapper";
import PostCard from "../PostCard";
import Day0 from "./posts/day-0.jpg"
import Day1 from "./posts/Day-1.png"
import Day2 from "./posts/Day-2.png"
import Day3 from "./posts/Day-3.png"
import Day4 from "./posts/Day-4.png"

export default function CodingCons() {
  const posts = [
    {
      image: Day0,
      caption: "Day 0 of posting daily about coding & consistency 🚀",
      date: "Day 0 • 13 Dec 2025",
      postLink: "https://www.instagram.com/p/DSO-OSWD-9t/",
    },
    {
      image: Day1,
      caption: "Explained arrays in Java with real examples",
      date: "Day 1 • 14 Dec 2025",
      postLink: "https://www.instagram.com/p/DSRmMdAD2Ir/?img_index=1",
    },
    {
      image: Day2,
      caption: "Day 2 of posting daily about coding & consistency",
      date: "Day 2 • 15 Dec 2025",
      postLink: "https://www.instagram.com/p/DSS_3-uE0BN/",
    },
    {
      image: Day3,
      caption: "Day 3 of posting daily about coding & consistency",
      date: "Day 3 • 16 Dec 2025",
      postLink: "https://www.instagram.com/p/DSVffW5E7no/",
    },
    {
      image: Day4,
      caption: "Day 4 of posting daily about coding & consistency",
      date: "Day 4 • 17 Dec 2025",
      postLink: "https://www.instagram.com/p/DSYIPPQk8X6/",
    },
    {
      image: Day5,
      caption: "Day 5 of posting daily about coding & consistency",
      date: "Day 5 • 18 Dec 2025",
      postLink: "https://www.instagram.com/p/DSaxAavk95a/",
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
