import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const CountryWeather = ({ country }) => {

    const API_KEY = process.env.REACT_APP_API_KEY
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`
    const [temperature, setTemperature] = useState('')
    const [wind, setWind] = useState('')
    const [icon, setIcon] = useState('')

    const hook = () => {
        axios
            .get(API_URL)
            .then(response => {
                setTemperature(Math.round(response.data.main.temp - 273))
                setWind(response.data.wind.speed)
                setIcon(response.data.weather[0].icon)
            })
    }
    useEffect(hook, [])
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {temperature}<sup>&deg;</sup>C</p>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon' />
            <p>Wind: {wind} mph direction: {}</p>
        </div >
    )
}

export default CountryWeather