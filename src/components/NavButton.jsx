import React from "react";
import { toggleNav } from "../actions/navActions";
import { connect } from "react-redux";

const NavButton = (props) => {
  return (
    <div>
      <button
        onClick={() => props.toggleNav()}
        className="absolute fas fa-bars fa-2x bg-black w-20 h-20 rounded-full text-white right-4 bottom-4"
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
