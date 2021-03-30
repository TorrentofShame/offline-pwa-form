import React from "react";
import PropTypes from "prop-types";
import RenderError from "_utils/renderError";
import { Field } from "redux-form";

const CheckBox  = ({ input, label, meta, options }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <br />
    {options.map(({ value, title }, index) => (<>
      <Field
        key={`box-${input.name}-${value}-${index}`}
        type="checkbox" 
        id={`${input.name}-${value}`}
        name={`${input.name}-${value}`}
        value={value}
        component="input"
      />
      <label 
        key={`label-${input.name}-${value}-${index}`}
        htmlFor={`${input.name}-${value}`}>{title}</label>
      <br />
    </>))}
    <RenderError meta={meta}/>
  </div>
);
CheckBox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object,
  options: PropTypes.array.isRequired
};

export default CheckBox;
