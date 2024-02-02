const axios = require("axios");

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

exports.fetchWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  return response.data;
};
