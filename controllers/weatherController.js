const express = require('express');
const weatherService = require('../services/weatherService');

const router = express.Router();

router.get('/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const weather = await weatherService.fetchWeather(city);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;
