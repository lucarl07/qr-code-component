import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const CardTitle = ({value}) => {
  return (
    <h1 className={`fs-5 my-3 text-center ${styles.h1}`}>
      {value}
    </h1>
  );
}

CardTitle.propTypes = {
  value: PropTypes.string
}

export default CardTitle; 