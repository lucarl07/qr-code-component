import PropTypes from "prop-types";

const CardTitle = ({value}) => {
  return (
    <h1>{value}</h1>
  );
}

CardTitle.propTypes = {
  value: PropTypes.string
}

export default CardTitle; 