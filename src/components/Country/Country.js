import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flag, capital, population, region } = props.country
    return (
        <div className="country">
            <h3>This is: {name}</h3>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p> Capital is: {capital} and population is: {population}</p>
        </div>
    );
};

export default Country;