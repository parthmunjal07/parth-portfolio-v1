import React from "react";
import PageWrapper from "../PageWrapper";

function Git() {
  return (
    <PageWrapper>
      <div className="bg-gray-700 w-[90%] md:w-[65%] mx-auto p-8">
        <div className="mt-16">
          <h1 className="text-4xl text-center font-bold leading-tight">
            Git - A beginners Guide
          </h1>
          <hr className="bg-gray-500" />
          <h2 className="text-3xl text-center font-semibold leading-tight mt-7">
            {" "}
            Part-1 : Why Version Control Exists: The Pen Drive Problem{" "}
          </h2>
          <h3 className="text-2xl font-semibold">The History</h3>
          <p className="text-xl">
            So, a long time ago before the invention of git or any other
            equivalent software, people used to code locally. Now by locally I
            mean to say there was no stuff like Google Drive to store any of the
            stuff online like today.{" "}
          </p>
          <p className="text-xl">
            A person X who is coding on his system had to keep the code in
            physical drives, for our case pen drives. And to share this code to
            person Y, he had to give the pen drive to Y as simple as that. Then
            Y created a copy of the code on his system to fix some bugs. Y fixed
            the bugs (technically he just changed some codes) but on his own
            system not on the pen drive and then he copied the changes in the
            Pen Drive. That is good. Now, X knows changes done by Y and
            vice-versa.
          </p>
          <p className="text-xl">
            But now assume 20 people working on a same project. Is it possible
            for each and every person to know that “Who changed what??”, “Who
            introduced the bug“ or “Who changed the error“. Obviously No. So the
            first <b>problem</b> we encountered was the <b> tracking of code </b>.
          </p>
          <p className="text-xl">Okay now think, amongst the 20 people P has the Pen Drive and he is working on it. But two other Q and R people also came across an idea to implement on the code but they have to wait for P to finish the work and give them the pen drive. That is the problem, only one person at a time can work on the code. We need a <b>centralised solution </b> for everyone to work on the code together. And the second problem comes out to be collaboration.</p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Git;
