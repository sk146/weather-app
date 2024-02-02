import axios from "axios";

export const fetchWeather = (city) => async (dispatch) => {
  const response = await axios.get(`/weather/${city}`);
  const weather = response.data;
  dispatch({
    type: "FETCH_WEATHER",
    payload: weather,
  });
};
