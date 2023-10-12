import {  useField,  } from "formik";
import "../../css/auth.css"
import PropTypes from "prop-types";

function Input({ label,type,...props }) {
  const [field, ] = useField(props);
  return (
    <label>
      <div>{label}</div>
      <input  type={type} {...field} {...props} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
