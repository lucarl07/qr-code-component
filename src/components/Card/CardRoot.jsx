import styles from "./Card.module.scss"
import PropTypes from "prop-types";

const CardRoot = ({children}) => {
  return (
    <section className={`
      container d-flex flex-column
      p-3 rounded-4 bg-white
      ${styles.card}
    `}>
      {children}
    </section>
  );
}

CardRoot.propTypes = {
  children: PropTypes.node
}

export default CardRoot;