import React, { useState } from 'react'
import Conditions from '../Conditions'

export const Forecast = () => {
    let [responseObj, setResponseObj] = useState({})
    function getForecast() {
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat={44.61}&lon={124.04}&exclude={hourly, daily}&appid={de8cffca055933938950f41a4db83ad2}')
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })
    }
    
    return (
        <div>
            <h2>South Beach Weather Conditions</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
    }
