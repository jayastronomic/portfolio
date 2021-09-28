import PreviousMap from "postcss/lib/previous-map";
import React from "react";

const Landing = (props) => {
  const goToMyStory = () => {
    props.history.push("/mystory");
  };

  return (
    <div className="landing-container h-screen flex items-center justify-center">
      <button
        onClick={() => goToMyStory()}
        className="tracking-wider text-white text-3xl hover:opacity-50 bg-transparent border border-white px-12 py-2 transform translate-y-16 magz"
      >
        Enter
      </button>
    </div>
  );
};

export default Landing;
