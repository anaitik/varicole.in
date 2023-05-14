import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState({});
//   const [lati, setLati] = useState(null);
//   const [loni, setLoni] = useState(null);

const fetchData = async () => {
    const API_KEY = '320acd225163160984dad9ca38fccbb9';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${44.34}&lon=${10.99}&appid=${API_KEY}`;
    const response = await axios.get(url);
    setWeatherData(response.data.main);
};
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
    {/* <input type="number" placeholder='Enter Latitude' onChange={(e) => setLati(e.target.value)} value={lati}></input> */}
      <h2>Current weather for </h2>
      <p>Temperature: {weatherData.temp}°C</p>
      <p>Description: </p>
    </div>
  );
};

export default WeatherComponent;
