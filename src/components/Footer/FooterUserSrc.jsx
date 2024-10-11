import PropTypes from "prop-types";

const FooterUserSrc = ({href, name}) => {
  return (
    <p className="user-src">
      Coded by <a href={href} target="_blank">{name}</a>. 
    </p>
  );
}

FooterUserSrc.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FooterUserSrc;