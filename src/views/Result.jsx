import React from "react";

const Result = props => {

    const { cityData } = props

    return (
        <div>
            <div className='city-name'>
                <h2>{cityData.name}</h2>
                <span className='imgFlag'>
                    <img crossOrigin="anonymous" src={cityData.url_flag} alt="Bandeira do País"></img>
                </span>
            </div>
            <div className='city-weather'>
                <p><strong>Clima:</strong> {cityData.weather_main}</p>
                <span className="imgWeather">
                    <img src={cityData.iconWeatherURL} alt="Imagem clima" />
                </span>
            </div>
            <div className='city-temp'>
                <p><strong>Temperatura:</strong> {cityData.temp}°C</p>
            </div>
            <div className='city-temp-min'>
                <p>
                    | <strong>Máxima:</strong> {cityData.max_temp}°C
                </p>
            </div>
            <div className='city-temp-max'>
                <p>
                    | <strong>Mínima:</strong> {cityData.min_temp}°C
                </p>
            </div>
        </div>
    )
}

export default Result