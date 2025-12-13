import React from "react";
import PageWrapper from "../PageWrapper";

function Blog1() {
  return (
    <PageWrapper>
      <div className="bg-gray-700 w-[90%] md:w-[65%] mx-auto p-8">
        <div className="mt-16">
          <h1 className="text-4xl text-center font-bold leading-tight">
            My Bucket List / Goals
          </h1>
          <p className="text-xl text-center">
            So, if you have come here, you are interested in my aspirations.
          </p>
          <hr className="bg-gray-500" />
          <div className="mt-10">
            <h1 className="text-2xl font-bold">
              {" "}
              I. The things I want to buy after earning money.
            </h1>
            <p className="text-xl">
              Actually, there are some things of which I have made a list that I
              need to buy with my own money when whether through internship,
              freelance etc...
            </p>
            <div className="mt-10">
              <ol className="list-[lower-roman]">
                <li className="text-xl ml-10">
                  <span className="font-semibold underline underline-offset-4">
                    A Good Desk Setup
                  </span>
                  : A soon as I entered college I bought a laptop because it was
                  a necessity but along with came reels and shorts of so called
                  "Heavy lacs of setups"
                  <br />
                  But I want something different.
                  <br />
                  The goal is to not only to build a pc or fill the table but to
                  make of room full of childhood dreams.
                  <br />
                </li>
                <li className="text-xl ml-10 mt-8">
                  <span className="font-semibold underline-offset-4 underline">
                    A Good Bike and Car
                  </span>
                  : So, to tell you we don't have a car due to financial
                  constraints
                  <br />
                  But as being a guy who's into car and bikes has a dream of
                  owning one.
                  <br />I really love the bikes like{" "}
                  <span className="font-semibold">
                    "The Triumph Speed 400"
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold">
                    {" "}
                    "The RE Continental GT 650"{" "}
                  </span>
                  . These are my types of bikes.
                  <br />
                  Getting onto cars, it is actually not possible to buy my dream
                  car like its worth more than a crore but may be in future I
                  will buy them.
                  <br />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Blog1;
