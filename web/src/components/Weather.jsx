import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/weatherActions";

function Weather() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state);
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
      </form>
      <p>Temperature: {weather.temp}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default Weather;
