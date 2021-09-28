import React from "react";
import { toggleNav } from "../actions/navActions";
import { connect } from "react-redux";

const NavButton = (props) => {
  return (
    <div className="">
      <button
        onClick={() => props.toggleNav()}
        className="md:hidden fixed fas fa-bars bg-black w-16 h-16 rounded-full text-white right-4 bottom-4"
      ></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
