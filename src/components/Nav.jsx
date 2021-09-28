import React from "react";
import logo from "../styles/assets/logo2.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = (props) => {
  return (
    <div
      className={
        props.navIsOpen
          ? "w-64 bg-black absolute inset-y-0 left-0 mdLtransform transition duration-200 ease-in-out md:-translate-x-0 md:transform-none md:static md:transition-none"
          : "-translate-x-full w-64 bg-black absolute inset-y-0 left-0 transform transition duration-500 ease-in-out md:-translate-x-0 md:transform-none md:static md:transition-none"
      }
    >
      <div className="pt-10">
        <Link to="/home">
          <img className="w-56 pl-4 md:px-4" alt="jayastronomic" src={logo} />
        </Link>
        <nav className="pt-10 text-2xl sarabun px-2">
          <Link
            className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
            to="/mystory"
          >
            My Story
          </Link>
          <Link
            className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
            to="/resume"
          >
            Resume
          </Link>
        </nav>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    navIsOpen: state.navIsOpen,
  };
};
export default connect(mapStateToProps, null)(Nav);
