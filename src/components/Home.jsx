import React from "react";
import me from "../styles/assets/me.JPG";

const Home = (props) => {
  return (
    <div className="flex-1 home-container h-screen bg-gray-900">
      <div className="flex justify-center pt-20">
        <img
          className="w-64 h-64 object-cover rounded-full border border-white shadow-2xl"
          alt="me"
          src={me}
        />
      </div>
    </div>
  );
};

export default Home;
