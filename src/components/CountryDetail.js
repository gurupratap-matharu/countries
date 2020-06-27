import React from 'react'
import CountryWeather from './CountryWeather'

const CountryDetail = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages</h3>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            <h3>Flag</h3>
            <img src={country.flag} alt='country-flag' width="128" height="100"></img>
            <CountryWeather country={country} />

        </div>
    )
}

export default CountryDetail