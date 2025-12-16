import React from "react";
import PageWrapper from "../PageWrapper";

export default function CodingCons() {
  return (
    <PageWrapper>
      <div className="bg-gray-700 w-[90%] md:w-[65%] mx-auto p-8">
        <div className="mt-16">
          <h1 className="text-4xl text-center font-bold leading-tight">
            My Consistently Coding Challenge
          </h1>
          <p className="text-xl text-center">Code. Post. Grind. Repeat.</p>
          <hr className="bg-gray-500" />
        </div>
      </div>
    </PageWrapper>
  );
}
