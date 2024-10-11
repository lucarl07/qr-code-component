import PropTypes from "prop-types";

const CardRoot = ({children}) => {
  return (
    <section className="container">
      {children}
    </section>
  );
}

CardRoot.propTypes = {
  children: PropTypes.node
}

export default CardRoot;