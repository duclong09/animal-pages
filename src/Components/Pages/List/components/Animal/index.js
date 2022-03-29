import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

Animal.propTypes = {
  animal: PropTypes.object.isRequired,
};

function Animal({ animal }) {
  return (
    <div className="animal">
      <div className="animal-img">
        <img src={animal.thumbnaiUrl} alt={animal.name} />
      </div>
      <p className="animal-name">{animal.name}</p>
      <p className="animal-title">{animal.title}</p>
    </div>
  );
}

export default Animal;
