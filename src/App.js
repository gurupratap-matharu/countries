import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'
import CountrySearch from './components/CountrySearch'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountrySearch = (event) => {
    setCountryFilter(event.target.value)
  }


  return (
    <div>
      <h1>Countries</h1>
      <CountrySearch handleCountrySearch={handleCountrySearch} countryFilter={countryFilter} />
      <CountriesList countries={countries} countryFilter={countryFilter} />
    </div>
  )
}

export default App