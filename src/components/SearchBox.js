import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        placeholder="search robots"
        type="search"
      />
    </div>
  );
};

SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};

export default SearchBox;
