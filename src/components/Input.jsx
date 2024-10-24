import { PropTypes } from "prop-types";

export default function Input({ type, id }) {
  return (
    <>
      <input
        type={type}
        id={id}
        autoComplete="true"
        className="border w-full px-3 py-2 focus:outline-orange-300 focus:shadow-lg focus:shadow-orange-200 rounded-md"
      />
    </>
  );
}

//props validation
Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
