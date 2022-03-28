import React from 'react'
import PropTypes from 'prop-types';
import Animal from '../Animal';
import './styles.css'
AnimalList.propTypes = {
    animalList: PropTypes.array.isRequired,
};

function AnimalList({animalList}) {
    return (
        <ul className='animal-list'>
            {animalList.map((animal,id)=>(
                <li key={id}>
                    <Animal animal={animal}/>
                </li>
            ))}
        </ul>
    )
}

export default AnimalList
