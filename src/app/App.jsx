import React from "react";
import PropTypes from "prop-types";
import Form from "_pages/Form";
import FormConfig from "_config/form-config.yml";
import { connect } from "react-redux";
import { saveSubmission } from "_store/actions";

const stateToProps = state => ({
  submissions: state.submissions
});

const dispatchToProps = dispatch => ({
  saveSubmission: data => dispatch(saveSubmission(data))
});

const App = (props) => {
  return(
    <Form onSubmit={props.saveSubmission} config={FormConfig} />
  );
};
App.propTypes = {
  saveSubmission: PropTypes.func
};

export default connect(stateToProps, dispatchToProps)(App);
