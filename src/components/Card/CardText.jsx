import PropTypes from "prop-types";

const CardText = ({value}) => {
  return (
    <p className="fs-6 w-75 text-center">
      {value}
    </p>
  );
}

CardText.propTypes = {
  value: PropTypes.string
}

export default CardText; 