import React from 'react'

const CountrySearch = ({ handleCountrySearch, countryFilter }) => {
    return (
        <div>
            <input onChange={handleCountrySearch} value={countryFilter} />
        </div>
    )
}

export default CountrySearch