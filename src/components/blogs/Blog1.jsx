import React from "react";

function Blog1() {
  return (
    <div className="bg-gray-700 w-[65%] mx-auto p-8">
      <div className="mt-16">
        <h1 className="text-4xl text-center font-bold leading-tight">My Bucket List / Goals</h1>
        <p className="text-xl text-center">So, if you have come here, you are interested in my aspirations.</p>
        <hr className="bg-gray-500" />
        <div className="mt-10">
            <h1 className="text-2xl font-bold"> I. The things I want to buy after earning money.</h1>
            <p className="text-xl">Actually, there are some things of which I have made a list that I need to buy with my own money when whether through internship, freelance etc...</p>
            <ol className="list-[lower-roman]">
                <li className="text-xl ml-10"><span className="font-bold">A Good Desk Setup :</span> A soon as I entered college I bought a laptop because it was a necessity but along with came reels and shorts of so called "Heavy lacs of setups"
                <br /> 
                But I want something different.
                <br /> 
                The goal is to not only to build a pc or fill the table but to make of room full of childhood dreams. 
                <br />
                Refrences: Setup of <a href=""></a>
                </li>
            </ol>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
