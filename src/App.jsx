import React, { useState } from 'react';
import './App.css';
import { GetWeather, callFlags } from './api/api'
import Result from './views/Result';

function App() {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState({})
  const [load, setLoad] = useState("")

  function FirstUpper(desc) {
    const descFormat = desc[0].toUpperCase() + desc.substring(1);
    return descFormat;
  }

  async function handleClick() {
    setLoad("loading")
    const { name, main, weather, sys } = await GetWeather(city);
    const descWeather = weather[0].description
    const descWeatherFormat = FirstUpper(descWeather)
    const { url } = await callFlags(sys.country)
    setCityData(
      {
        name: name,
        temp: main.temp.toFixed(1),
        min_temp: main.temp_min.toFixed(1),
        max_temp: main.temp_max.toFixed(1),
        weather_main: descWeatherFormat,
        url_flag: url,
        iconWeatherURL: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
      })
    setLoad("done")
    setCity("")
  }

  return (
    <div className="App">
      <div className='conteiner'>
        <h1>Clima Tempo</h1>
        <div className="inputs">
          <input placeholder='Digite o nome da cidade' value={city} onChange={(e) => setCity(e.target.value)}></input>
          <button onClick={() => handleClick()}>Pesquisar</button>
        </div>
        <div className='loading' style={{ display: load === "loading" ? "flex" : "none" }}>
          <div className='loading-circle'></div>
        </div>
        <div className='result' style={{ display: Object.keys(cityData).length === 0 || load === "loading" ? "none" : "block" }}>
          <Result cityData = {cityData}/>
        </div>
      </div>
    </div>
  );
}

export default App;