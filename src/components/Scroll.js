import React from "react";
import PropTypes from "prop-types";

const Scroll = (props) => {
  return <div style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}>{props.children}</div>;
};

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scroll;
