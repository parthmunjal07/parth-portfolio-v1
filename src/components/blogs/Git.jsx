import React from "react";
import PageWrapper from "../PageWrapper";

function Git() {
  return (
    <PageWrapper>
      <div className="bg-black min-h-screen">
        <div className="w-[90%] md:w-[65%] mx-auto p-8">
          <div className="mt-16">
            <h1 className="text-4xl font-oswald text-white text-center font-bold leading-tight">
              Git - A beginners Guide
            </h1>
            <hr className="text-gray-500 mt-2" />
            <h2 className="text-3xl text-white font-inter text-center font-semibold leading-tight mt-7 mb-6">
              {" "}
              Part-1 : Why Version Control Exists: The Pen Drive Problem{" "}
            </h2>
            <h3 className="text-2xl font-semibold text-white font-inter mb-3">
              The History
            </h3>
            <p className="text-xl font-inter text-white">
              So, a long time ago before the invention of git or any other
              equivalent software, people used to code locally. Now by locally I
              mean to say there was no stuff like Google Drive to store any of
              the stuff online like today.{" "}
            </p>
            <p className="text-xl font-inter text-white mt-7">
              A person X who is coding on his system had to keep the code in
              physical drives, for our case pen drives. And to share this code
              to person Y, he had to give the pen drive to Y as simple as that.
              Then Y created a copy of the code on his system to fix some bugs.
              Y fixed the bugs (technically he just changed some codes) but on
              his own system not on the pen drive and then he copied the changes
              in the Pen Drive. That is good. Now, X knows changes done by Y and
              vice-versa.
            </p>
            <p className="text-xl font-inter text-white mt-7">
              But now assume 20 people working on a same project. Is it possible
              for each and every person to know that “Who changed what??”, “Who
              introduced the bug“ or “Who changed the error“. Obviously No. So
              the first <b>problem</b> we encountered was the{" "}
              <b> tracking of code </b>.
            </p>
            <p className="text-xl font-inter text-white mt-7">
              Okay now think, amongst the 20 people P has the Pen Drive and he
              is working on it. But two other Q and R people also came across an
              idea to implement on the code but they have to wait for P to
              finish the work and give them the pen drive. That is the problem,
              only one person at a time can work on the code. We need a{" "}
              <b>centralised solution </b> for everyone to work on the code
              together. And the <b> second problem </b> comes out to be{" "}
              <b>collaboration</b>.
            </p>
            <h3 className="text-2xl font-semibold text-white font-inter mt-7 mb-3">
              The Solution :-
            </h3>
            <h3 className="text-xl font-semibold text-white font-inter mt-4">
              Problem 1 : Tracking of the code
            </h3>
            <p className="text-xl font-inter text-white mt-7">
              The Solution is Version Control System often termed as VCS. A VCS
              tracks every change on the code by addition or removal of the
              data. It calculates the Difference = New Code - Old Code and
              stores them into a separate location like shown below.
              <br />
              For Example -
              <div className="p-2 bg-gray-800 mt-7 rounded-2xl border-gray-700 border-2">
                <code className="text-lg">
                  (+) I am writing this blog
                  <br />
                  (-) I am writing
                </code>
              </div>
              <p className="text-white text-xl font-inter mt-7">
                A popular version of this VCS in <b>Git</b> made by{" "}
                <b>Linus Torvalds</b> as a side project to track his main
                project <b>“Linux“</b>. Other popular services include{" "}
                <b>Apache</b>, <b>Mercurial</b>, etc.
              </p>
            </p>
            <h3 className="text-xl font-semibold text-white font-inter mt-7">
              Problem 2 : Collaboration
            </h3>
            <p className="text-white text-xl font-inter mt-7">
              To collaborate we needed server like a solution so that everyone
              code on the go at the same time. There some <b>GitHub</b>, a platform
              where Git is hosted online like a google drive but for your codes.
              Other popular services include software like <b>GitLab</b>, <b>BitBucket</b>, 
              etc.
            </p>
            <hr className="text-gray-500 mt-2" />
            <h2 className="text-3xl text-white font-inter text-center font-semibold leading-tight mt-7 mb-6">
              {" "}
              Part-2 : Why Version Control Exists: The Pen Drive Problem{" "}
            </h2>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Git;
