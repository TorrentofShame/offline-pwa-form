import React from "react";
import PropTypes from "prop-types";
import RenderError from "_utils/renderError";

const Paragraph = ({ input, label, meta }) => (
  <div className="inputDiv">
    <textarea {...input}/>
    <label htmlFor={input.name}>{label}</label>
    <RenderError meta={meta}/>
  </div>
);

Paragraph.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.object
};

export default Paragraph;
