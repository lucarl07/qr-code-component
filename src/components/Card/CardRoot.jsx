import PropTypes from "prop-types";

const CardRoot = ({children}) => {
  return (
    <section className={`
      container d-flex flex-column align-items-center object-fit-cover 
      w-25 py-3 rounded-4 bg-white
    `}>
      {children}
    </section>
  );
}

CardRoot.propTypes = {
  children: PropTypes.node
}

export default CardRoot;