import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

/* Components */
import Input from "_components/Input";
import Paragraph from "_components/Paragraph";
import Radio from "_components/Radio";
import Select from "_components/Select";
import CheckBox from "_components/CheckBox";

const stringToComponent = {
  ShortAnswer: {component: Input, type: "text"},
  Number: {component: Input, type: "number"},
  CheckBox: {component: CheckBox, type: "checkbox"},
  Paragraph: {component: Paragraph, type: "textarea"},
  Radio: {component: Radio, type: "radio"},
  Select: {component: Select, type: "select"},
};

const QuestionBuilder = ({ name, label, type, options, required, handleQuestIncs }) => {
  switch (type) {
  case "Radio":
    return (
      <Radio
        name={name}
        label={label}
        options={options}
        required={required}
        handleQuestIncs={handleQuestIncs}
      />
    );

  default:
    return (
      <Field
        name={name}
        type={stringToComponent[type].type}
        component={stringToComponent[type].component}
        label={label}
        required={required}
        options={options}
      />
    );
  }
};
QuestionBuilder.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  required: PropTypes.bool,
  handleQuestIncs: PropTypes.func.isRequired
};

export default QuestionBuilder;
