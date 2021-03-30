import React from "react";
import PropTypes from "prop-types";

const RenderError = ({ meta: { touched, error } }) => (<>
  { touched && error && <span className="error">{error}</span>}
</>);
RenderError.propTypes = {
  meta: PropTypes.object
};

export default RenderError;
