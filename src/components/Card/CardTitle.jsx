import PropTypes from "prop-types";

const CardTitle = ({value}) => {
  return (
    <h1 className="fs-5 my-3 w-75 fw-bold text-center">
      {value}
    </h1>
  );
}

CardTitle.propTypes = {
  value: PropTypes.string
}

export default CardTitle; 