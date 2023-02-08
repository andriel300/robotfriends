import React, { useState } from "react";
import PropTypes from "prop-types";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, info) => {
    setHasError(true);
  };

  if (hasError) {
    return <h1>Oooops. That is not good</h1>;
  }
  return children;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
