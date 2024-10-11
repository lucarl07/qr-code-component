import PropTypes from "prop-types";

const CardImage = ({src, alt}) => {
  return (
    <img src={src} alt={alt} />
  );
}

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default CardImage;