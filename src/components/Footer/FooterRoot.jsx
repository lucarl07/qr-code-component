import PropTypes from "prop-types";

const FooterRoot = ({children}) => {
  return (
    <div class="attribution">
      {children}
    </div>
  );
}

FooterRoot.propTypes = {
  children: PropTypes.node
}

export default FooterRoot;