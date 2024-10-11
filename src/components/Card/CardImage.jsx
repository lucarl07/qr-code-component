import PropTypes from "prop-types";

const CardImage = ({src, alt}) => {
  return (
    <img
      className="w-75 rounded-3"
      src={src} 
      alt={alt} 
      />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default CardImage;