import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

function Hero({ url }) {
  return (
      <div className="hero">
          <h1>Imagine a Place...</h1>
          <p>
              ...where you can belong to a school club, a gaming group, or a worldwide
              art community. Where just you and a handful of friends can spend time
              together. A place that makes it easy to talk every day and hang out
              more often.
          </p>
          <div className="buttons">
              <button className="button button-primary">Download for Mac</button>
              <button className="button button-secondary">
                  Open Discord in your browser
              </button>
          </div>
          <img src={url} alt="Discord Background" className="hero-image" />
      </div>
  );
}

Hero.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Hero;