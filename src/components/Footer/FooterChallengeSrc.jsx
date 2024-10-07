import PropTypes from "prop-types";

const FooterChallengeSrc = ({href, name}) => {
  return (
    <p className="challenge-source">
      Challenge by <a href={href} target="_blank">{name}</a>. 
    </p>
  );
}

FooterChallengeSrc.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FooterChallengeSrc;