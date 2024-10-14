import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const CardText = ({value}) => {
  return (
    <p className={`fs-6 text-center ${styles.p}`}>
      {value}
    </p>
  );
}

CardText.propTypes = {
  value: PropTypes.string
}

export default CardText; 