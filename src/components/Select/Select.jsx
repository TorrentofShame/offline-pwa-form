import React from "react";
import PropTypes from "prop-types";
import RenderError from "_utils/renderError";

const Select  = ({ input, label, meta, options }) => (
  <div>
    <label>{label}</label>
    <select {...input}>
      <option value="" selected disabled hidden />
      {options.map(({ value, title }, index) => (
        <option value={value} key={`${value}-${index}`}>{title}</option>
      ))}
    </select>
    <RenderError meta={meta}/>
  </div>
);
Select.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  options: PropTypes.array.isRequired
};

export default Select;
