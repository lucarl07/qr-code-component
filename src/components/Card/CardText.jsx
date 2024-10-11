import PropTypes from "prop-types";

const CardText = ({value}) => {
  return (
    <p>{value}</p>
  );
}

CardText.propTypes = {
  value: PropTypes.string
}

export default CardText; 