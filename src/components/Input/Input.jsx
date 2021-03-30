import React from "react";
import PropTypes from "prop-types";
import RenderError from "_utils/renderError";

const Input = ({ input, label, type, meta, required}) => (
  <div className="inputDiv">
    <input required={required} {...input} placeholder={label} type={type} />
    <label htmlFor={input.name}>{label}</label>
    <RenderError meta={meta}/>
  </div>
);

Input.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object,
  required: PropTypes.bool
};

export default Input;
