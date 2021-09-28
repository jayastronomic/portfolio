import React from "react";
import logo from "../styles/assets/logo2.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleNav } from "../actions/navActions";

const Nav = (props) => {
  return (
    <div
      className={
        props.navIsOpen
          ? "w-64 bg-black absolute inset-y-0 left-0 transform transition duration-200 ease-in-out md:-translate-x-0 md:transform-none md:static md:transition-none"
          : "-translate-x-full w-64 bg-black absolute inset-y-0 left-0 transform transition duration-500 ease-in-out md:-translate-x-0 md:transform-none md:static md:transition-none"
      }
    >
      <div className="pt-10">
        <Link to="/mystory">
          <img className="w-56 pl-4 md:px-4" alt="jayastronomic" src={logo} />
        </Link>
        <nav className="pt-10 text-2xl sarabun px-2">
          {props.location.pathname === "/mystory" ? (
            <Link
              className="transition block text-yellow-400 font-bold hover:text-white hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/mystory"
              onClick={() => props.toggleNav()}
            >
              My Story
            </Link>
          ) : (
            <Link
              className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/mystory"
              onClick={() => props.toggleNav()}
            >
              My Story
            </Link>
          )}
          {props.location.pathname === "/projects" ? (
            <Link
              className="transition block text-yellow-400 font-bold hover:text-white hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/projects"
              onClick={() => props.toggleNav()}
            >
              Projects
            </Link>
          ) : (
            <Link
              className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/projects"
              onClick={() => props.toggleNav()}
            >
              Projects
            </Link>
          )}
          {props.location.pathname === "/resume" ? (
            <Link
              className="transition block text-yellow-400  font-bold hover:text-white hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/resume"
              onClick={() => props.toggleNav()}
            >
              Resume
            </Link>
          ) : (
            <Link
              className="transition block text-white font-bold hover:bg-yellow-400 pl-2 py-2 rounded transform hover:-translate-y-1"
              to="/resume"
              onClick={() => props.toggleNav()}
            >
              Resume
            </Link>
          )}
        </nav>
      </div>
      <div className="flex flex-col space-y-6 pt-20 pl-4 justify-center">
        <a
          href="https://www.linkedin.com/in/julian-antonio-smith/"
          className="hover:text-yellow-400 hover:-translate-y-2 transform transition fab fa-2x text-white fa-linkedin"
        ></a>
        <a
          href="https://twitter.com/JayAstronomic"
          className="hover:text-yellow-400 hover:-translate-y-2 transform transition fab fa-2x text-white fa-twitter"
        ></a>
        <a
          href="https://github.com/jayastronomic"
          className="hover:text-yellow-400 hover:-translate-y-2 transform transition fab fa-2x text-white fa-github"
        ></a>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    navIsOpen: state.navIsOpen,
  };
};

const mapDispatchToProps = {
  toggleNav,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
