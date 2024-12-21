import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ discordUrl, menuUrl }) {
  return (
    <div className="navbar">
      <img src={discordUrl} alt="Navbar Logo" className="navbar-logo" />
      <img src={menuUrl} alt="Menu Icon" className="menu-icon-image" />
    </div>
  );
}

Navbar.propTypes = {
  discordUrl: PropTypes.string.isRequired,
  menuUrl: PropTypes.string.isRequired,
};

export default Navbar;