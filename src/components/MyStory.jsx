import React from "react";
import me from "../styles/assets/me.JPG";

const MyStory = () => {
  return (
    <div className="my-story-container flex flex-col w-full">
      <div className="flex  justify-center p-10">
        <img
          className="w-64 h-64 object-cover rounded-full border border-white shadow-2xl "
          alt="me"
          src={me}
        />
      </div>
      <div className="bio-container bg-gray-900 flex flex-col pt-6 bg-opacity-90">
        <h1 className="magz flex justify-center text-7xl text-yellow-300">
          My Story
        </h1>
        <p className=" magz flex justify-center text-yellow-300 text-3xl pt-8 text-center">
          I am a Full Stack Engineer from Chicago, IL
        </p>
        <p className="magz tracking-wider py-8 text-yellow-300 text-center px-4 text-xl break-words">
          My name is Julian Smith and I love building full stack applications. I
          fell in love with coding after attending flatiron school, while being
          enrolled in their software engineering program. I learned a lot of
          during the 5-month program. Everyday, me and the rest of my cohort
          were grinding it out to become the best software engineers we could
          be. We built many great projects during the program. It wasn't always
          easy but it definitely was worth pushing through until the end. I'm
          glad I took this route to become a software engineer. I am definitely
          ready to put my skills to the test at a great tech company!
        </p>
      </div>
    </div>
  );
};

export default MyStory;
