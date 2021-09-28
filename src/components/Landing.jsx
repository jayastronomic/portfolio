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
        className="landing-enter-button tracking-wider text-white text-2xl hover:opacity-50 bg-transparent border border-white px-12 py-2 transform translate-y-12"
      >
        Enter
      </button>
    </div>
  );
};

export default Landing;
