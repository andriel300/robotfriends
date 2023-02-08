import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card key={i} email={robots[i].email} id={robots[i].id} name={robots[i].name} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  robots: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CardList;
