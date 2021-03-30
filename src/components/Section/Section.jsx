import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validateNotEmpty from "_utils/validateNotEmpty";
import QuestionBuilder from "_utils/questionBuilder";

const Section = ({ handleSubmit, previousSection, isLast, title, description, questions, isVisible, pristine, reset, submitting, handleQuestIncs }) => {

  if (!isVisible) {
    return <div />;
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="top">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {questions.map((q, i) => <QuestionBuilder handleQuestIncs={handleQuestIncs} key={`${q.name}-${i}`} {...q} />)}
      <div>
        { previousSection &&
        <button type="button" className="previous" onClick={previousSection}>
          Previous
        </button>}
        { isLast
          ? <button type="submit" className="submit" disabled={pristine || submitting}>Submit</button>
          : <button type="submit" className="next" >Next</button>
        }
        <button type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
      </div>
    </form>
  );
};
Section.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousSection: PropTypes.func,
  isLast: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  handleQuestIncs: PropTypes.func.isRequired
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false, // preserve form data
  forceUnregisterOnUnmount: true, // unregister fields on unmount
  validateNotEmpty
})(Section);
