import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
AnimalList.propTypes = {
  animals: PropTypes.array,
};

AnimalList.defaultProps = {
  animals: [],
};

function AnimalList(props) {
  const { animals } = props;
  return (
    <div className="container">
      <ul className="animal-list">
        {animals.map((animal) => (
          <div className="animal-media">
            <li className="animal-item" key={animal.id}>
              <h4 className="animal-name">{animal.name}</h4>
              <img
                src={animal.imageUrl}
                alt={animal.title}
                className="animal-images"
              ></img>
              <p className="animal-title">{animal.title}</p>
              <p className="animal-desc">{animal.description}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AnimalList;
