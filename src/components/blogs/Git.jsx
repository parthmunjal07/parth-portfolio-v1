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
              code on the go at the same time. There some <b>GitHub</b>, a
              platform where Git is hosted online like a google drive but for
              your codes. Other popular services include software like{" "}
              <b>GitLab</b>, <b>BitBucket</b>, etc.
            </p>
            <hr className="text-gray-500 mt-2" />
            <h2 className="text-3xl text-white font-inter text-center font-semibold leading-tight mt-7 mb-6">
              {" "}
              Part-2 : Basics and Essential Commands{" "}
            </h2>
            <h3 className="text-2xl font-semibold text-white font-inter mb-3">
              What is Git :-
            </h3>
            <p className="text-white text-xl font-inter mt-7">
              Before understanding Git we need to understand, what is a Version
              Control System (VCS).
            </p>
            <p className="text-white text-xl font-inter mt-7">
              <b>VCS</b> — A <b>Version Control System</b> is a type of software
              that is used to track the changes done to the code overtime by a
              contributor. Think of it as a person keeping record of every
              change done to the allotted code.
            </p>
            <p className="text-white text-xl font-inter mt-7">
              Talking about Git, it is the most widely used VCS made by Linus
              Torvalds.
            </p>
            <h3 className="text-2xl font-semibold text-white font-inter mt-7">
              Why Git is Used :-
            </h3>
            <p className="text-white text-xl font-inter mt-7">
              So, before Git or any VCS existed, people faced this problem of
              tracking their code. In projects with a big team no one knew what
              changes were done by whom creating confusions. Also, if a bug was
              introduced by a line of code, we didn’t have a checkpoint till the
              time code was working.
            </p>
            <p className="text-white text-xl font-inter mt-7">
              After Git and other VCS came, people kept a track of their code.
              Just like we have checkpoints in a game, we can push the code to
              productions at different checkpoints and if it encounters an error
              we can start again at the last push / checkpoint.
            </p>
            <h3 className="text-2xl font-semibold text-white font-inter mt-7">
              Git Basics and Core Terminologies :-
            </h3>
            <ol className="text-white text-xl font-inter mt-7 list-decimal pl-8 space-y-6 leading-relaxed">
              <li>
                <b>git init</b> - This command initialises an empty git
                repository in your project and makes a folder name ‘.git‘ in
                which all changes are tracked and stored.
                <br />
                Repository — A central location in which data is stored and
                managed. Basically a place in the memory where all the changes
                are stored and managed.
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767004570013/0c09d73c-0768-45ac-b3df-64141504e242.png" alt="" className="rounded-2xl p-2"/>
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767004808230/ed89bc41-d273-4dec-8a0a-df19b2212644.png" alt="" className="rounded-2xl p-2"/>
              </li>
              <li>
                <b>git add {"<"}filename{">"}</b> — This command is used to add a file to
                tracking inside the .git folder. If you want all files of your
                project to put into tracking just type the command “git add .“
                <br />
                A simple explanation would says that you tell git, which files to remember.
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767005476171/4ba42568-2bfe-47aa-9b4d-30e2d700b370.png" alt="" />
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767005488212/bd3bc4b5-79d8-4f35-95c7-9c18abcca123.png" alt="" className="rounded-2xl p-2"/>
              </li>
              <li><b>git commit -m “message”</b> — This command is used to save the changes i.e. declaring a checkpoint in the repository. Every time you commit the code you save the changes creating a new checkpoint for returning to if required.
              <br />
              If you want to add and commit a file at the same time use the command “git commit -am “message“
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767006285131/8c153666-1832-4617-bd50-50360c597855.png" alt="" className="rounded-2xl p-2"/>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767006463548/36366c5d-335b-4e82-b495-5540d25dfabf.png" alt="" className="rounded-2xl p-2"/>
              </li>
              <li>
                <b>git log</b> — This command shows all the commits done to your file.
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767006950574/64a19170-ce62-48df-82d7-2d44dbb7737f.png" alt="" className="rounded-2xl p-2"/>
                Now if you want this to be shorter and easily readable use the command “git log --oneline“
              </li>
              <li><b>git diff</b> — Shows the changes done between two commits
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767007877591/d2bbd1b8-2bdf-42c5-8eea-fcbf73fcae21.png" alt="" className="rounded-2xl p-2"/>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767007943288/9ec37a35-d049-4baa-a91a-2d509217faf4.png" alt="" className="rounded-2xl p-2"/>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767007966722/4ffddb63-5a53-48c3-aa80-0f7527be65b5.png" alt="" className="rounded-2xl p-2"/>
              </li>
              <li><b>git revert</b> — This command is used to delete the last commit pushed to the code that is returning to the previous checkpoint.</li>
              <li><b>git reset</b> — This command is used to revert all the commit till a specific previous commit.</li>
            </ol>
            <h2 className="text-3xl text-white font-inter text-center font-semibold leading-tight mt-7 mb-6">
              {" "}
              Part 3 :- Inside Git: How It Works and the Role of the .git Folder
              {" "}
            </h2>
            <hr className="text-gray-500 mt-2" />
            <h3 className="text-2xl font-semibold text-white font-inter mt-7">
              Working of Git :-
            </h3>
            <p className="text-xl font-inter text-white mt-7">
              So, to start with working of git, we need to initialize git in our project directory so that it can track changes.
            </p>
            <ol className="text-white text-xl font-inter mt-7 list-decimal pl-8 space-y-6 leading-relaxed">
              <li>We’ll put the command <b>git init</b> to initialise an empty repository inside the directory as shown below. This makes the .git hidden folder where changes are tracked.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767535590102/fd8341d3-c429-4a1a-a630-3485fbba5a24.png" alt="" className="rounded-2xl p-2"/></li>
              <li>Now add the files in your directory that you want to track by the command <b>git add {"<"}filename{">"}</b> . For instance I am using a file <b>file1.txt</b> for demonstration.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767535833309/03e48979-a255-4fb8-893e-e700252c88db.png" alt="" className="rounded-2xl p-2"/></li>
              <li>Now we will put forward our first commit on the git repository by the command <b>git commit -m “First Commit“</b>.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767537360360/98551999-f899-4297-b998-ff7dadf0af13.png" alt="" className="rounded-2xl p-2"/>
                <br />
                <b><i>Working of git commit</i></b> - So when we do any change in our file, those changes are stored on the staging area before actually being pushed to the .git folder. The <b>git commit</b> command pushes the changes from a staging area into the .git folder.
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767537761503/77b108ce-7448-4e95-a3e3-55f01d6562f4.png" alt="" className="rounded-2xl p-2"/>
                </li>
              <li>To get a better understanding of the topic we need 3-4 commits. So, lets do that also. Use <b>git log</b> to view all commits at once.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767536713262/f3b86c0e-32a5-4f1e-b447-1b20563da603.png" alt="" className="rounded-2xl p-2"/></li>
            </ol>
            <p className="text-xl font-inter text-white mt-7">
              Now in the above image we see 3 commits and something written as HEAD. Lets get into that.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767537005250/28499a7b-13ff-45c1-be5b-9710a34f3d63.png" alt="" className="rounded-2xl p-2"/>
            </p>
            <p className="text-xl font-inter text-white mt-7">
All of these commit are connected to each other as a Linked List. Each Commit has a unique hash value of its own and each hash has a reference of the previous hash which forms a Linked List.
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767538328614/c47b3db5-fb43-4bfc-97ff-298e96c1acba.png" alt="" className="rounded-2xl p-2"/>
            </p>
            <p className="text-xl font-inter text-white mt-7">
              Now the HEAD the last commit to the code. For our case commit 3 as we see in the git log.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767545863664/d31e21b7-6047-477d-bdef-7bb154a13e67.png" alt="" className="rounded-2xl p-2"/>
            </p>
            <p className="text-xl font-inter text-white mt-7">
              Now what’s the purpose of this HEAD, references etc.. The main function is the command git reset {"<"}hash{">"}. This Command is used the move the head to a desired previous hash while removing the ahead commits.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767550741132/ce68fb0e-ad61-489a-b484-22f3cbcf9651.png" alt="" className="rounded-2xl p-2"/>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767550764237/eafda725-bc90-4bae-854e-ace80cd12cfb.png" alt="" className="rounded-2xl p-2"/>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767550894850/63de15e7-bc94-4dbd-8ea1-c66915af2a1f.png" alt="" className="rounded-2xl p-2" />
            </p>
            <h3 className="text-2xl font-semibold text-white font-inter mt-7">
              Understanding the .git folder :-
            </h3>
            <p className="text-xl font-inter text-white mt-7">
              As we know .git is the hidden folder where all the operational functionalities of git are done. We can access it by the following steps.
            </p>
            <ol className="text-white text-xl font-inter mt-7 list-decimal pl-8 space-y-6 leading-relaxed">
              <li>Enter <b>cd .git</b> to get inside the .git folder
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767551210373/0284ca78-5b44-4eb4-ad47-7485f955be23.png" alt="" className="rounded-2xl p-2"/></li>
              <li>After getting into it enter the command <b>ls</b> to get what files or folders are stored inside it.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767551384582/d3122d62-2ff2-4e2d-9cc5-ad1d0e2127f2.png" alt="" className="rounded-2xl p-2"/>
              Now before going ahead we need to understand the concept of branching.
              <br />
              <b><i>Branching :-</i></b>
              <br />
              So let us assume that two people are working on the repository. There is one branch called as the <b>main branch</b> which is already existing the first one.
              </li>
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767634874110/4d994831-ae44-4e1f-8d80-fcfd93f78e74.png" alt="" className="rounded-2xl p-2"/>
              Now the other person starts working on his own branch (xyz) so that there are no conflicts on the repository if they commit simultaneously on the the same branch.
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767635264142/3aa6f055-dc48-42cb-a869-aa56a5ee9e5b.png" alt="" className="rounded-2xl p-2"/>
              And then merge the xyz branch into the main branch at the last.
Now all of this data of branching is stored in the HEAD folder as shown below in the image (master is same as main).

              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1767635562197/e5bd7e3c-901b-4691-9a94-500eeaf94678.png" alt="" className="rounded-2xl p-2"/>
              The config stores all the configurational data of the git repository inside it.


            </ol>
            And there is much more. But this is all for inside git for beginners.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Git;
