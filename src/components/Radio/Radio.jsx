import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import RenderError from "_utils/renderError";

const Radio = ({name, label, options, required, handleQuestIncs}) => (
  <div>
    <label>{label}</label>
    <div>
      {options.map(({ value, title, include }, index) => {

        if (include) {
          handleQuestIncs(name, value, include);
        }

        return(
          <label key={`${value}-${index}`}>
            <Field
              key={`${value}-${index}`}
              component="input"
              type="radio"
              name={name}
              value={value}
              required={required}
            />
            {title}
          </label>
        );
      })}
      <Field name={name} component={RenderError} />
    </div>
  </div>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  handleQuestIncs: PropTypes.func.isRequired
};

export default Radio;

