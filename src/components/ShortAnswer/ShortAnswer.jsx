import React from "react";
import PropTypes from "prop-types";

const ShortAnswer = ({ name, placeholder, state, handleChange }) => {

  return (
    <input
      type="text"
      name={name}
      value={state}
      placeholder={placeholder ? placeholder : ""}
      onChange={handleChange}
    />
  );
};

ShortAnswer.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  state: PropTypes.string,
  handleChange: PropTypes.func
};

export default ShortAnswer;
