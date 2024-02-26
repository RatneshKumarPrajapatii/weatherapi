import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
const App = () => {
  const iconLInk = "https://openweathermap.org/img/wn/10d@2x.png"
  const [city, setCity] = useState("mumbai")
  console.log(name);
  const [info, setInfo] = useState({
    cityName: "",
    temprature: "",
    icon: "",
    windSpeed: ""
  })
  console.log(info);
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42fcf40d5364ab3081be71954f6d5f24&units=metric`)
      .then((response) => {
        setInfo({
          cityName: response.data.name,
          temprature: response.data.main.temp,
          icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          windSpeed: response.data.wind.speed
        })
      })
      .catch(err => console.log(err))
  }, [city]);
  const handleSubmit = (e) => {
    e.preventDefault()
    setCity("")
  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-8 main-header'>
            <form className='form' onSubmit={handleSubmit}>
              <input className='input' value={city} onChange={(e) => setCity(e.target.value)} type="text" name="" placeholder={city} />
              <button className='input' type='submit'>Search</button>
            </form>
            <div className='card'>
              <div className='body-content'>
                <h2>The City Name is : {info.cityName}</h2>
                <h2>The Temprature in {info.cityName} is {info.temprature} °C</h2>
                <h2>The windSpeed is {info.windSpeed}</h2>
                <img className='icon' src={info.icon} alt="weather icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
