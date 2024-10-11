import PropTypes from "prop-types";

const FooterRoot = ({children}) => {
  return (
    <div className="attribution">
      {children}
    </div>
  );
}

FooterRoot.propTypes = {
  children: PropTypes.node
}

export default FooterRoot;