const initialState = {
  temp: null,
  humidity: null,
  conditions: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER": {
      return {
        temp: action.payload.main.temp,
        humidity: action.payload.main.humidity,
        conditions: action.payload.weather[0].description,
      };
    }

    default:
      return state;
  }
};

export default weatherReducer;
