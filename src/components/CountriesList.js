import React from 'react'
import CountryDetail from './CountryDetail'

const CountriesList = ({ countries, countryFilter }) => {

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(countryFilter.toLowerCase()))

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        return (
            <CountryDetail country={country} />
        )
    }

    else if (filteredCountries.length < 10) {
        return (
            <ul>
                {filteredCountries.map(country =>
                    <li key={country.alpha3Code}>
                        {country.name}
                    </li>
                )}
            </ul>
        )
    }

    else if (filteredCountries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }


}

export default CountriesList