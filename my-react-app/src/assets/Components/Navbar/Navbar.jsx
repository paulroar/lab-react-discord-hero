import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ url }) {
  return (
      <div className="navbar">
          <img src={url} alt="Navbar Logo" className="navbar-logo" />
          <div className="menu-icon">
              <img
                  src="./assets/Components/Navbar/menu-icon.png"
                  alt="Menu Icon"
                  className="menu-icon-image"
              />
          </div>
      </div>
  );
}

Navbar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Navbar;