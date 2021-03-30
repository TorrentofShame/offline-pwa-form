import Form from "./Form";
import { reduxForm } from "redux-form";

export default reduxForm({
  form: "simpleForm",
  initialValues: {
    country: "Brazil"
  }
})(Form);
