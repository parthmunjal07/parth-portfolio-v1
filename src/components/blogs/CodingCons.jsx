import React from "react";
import PageWrapper from "../PageWrapper";
import PostCard from "../PostCard";
import Day0 from "./posts/day-0.jpg"
import Day1 from "./posts/Day-1.png"
import Day2 from "./posts/Day-2.png"
import Day3 from "./posts/Day-3.png"
import Day4 from "./posts/Day-4.png"
import Day5 from "./posts/Day-5.png"
import Day6 from "./posts/Day-6.png"
import Day7 from "./posts/Day-7.png"
import Day9 from "./posts/Day-9.png"


export default function CodingCons() {
  const posts = [
    {
      image: Day0,
      caption: "Day 0 of posting daily about coding & consistency",
      date: "Day 0 • 13 Dec 2025",
      postLink: "https://www.instagram.com/p/DSO-OSWD-9t/",
    },
    {
      image: Day1,
      caption: "Day 1 of posting daily about coding & consistency",
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
    {
      image: Day6,
      caption: "Day 6 of posting daily about coding & consistency",
      date: "Day 6 • 19 Dec 2025",
      postLink: "https://www.instagram.com/p/DSdXsnNE8u-/",
    },
    {
      image: Day7,
      caption: "Day 7 of posting daily about coding & consistency",
      date: "Day 7 • 20 Dec 2025",
      postLink: "https://www.instagram.com/p/DSftYP1ktw2/?img_index=1",
    },
    {
      image: Day7,
      caption: "Day 8 of posting daily about coding & consistency",
      date: "Day 8 • 21 Dec 2025",
      postLink: "https://www.instagram.com/p/DSieBoDE2dL/",
    },
    {
      image: Day9,
      caption: "Day 9 of posting daily about coding & consistency",
      date: "Day 9 • 22 Dec 2025",
      postLink: "https://www.instagram.com/p/DSk97N1E6w_",
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
