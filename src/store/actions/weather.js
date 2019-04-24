import {
  GET_LOCATION,
  GET_ZIP,
  INPUT_CHANGE,
  GET_WEATHER,
} from './actionTypes';

export function inputChange(inputValue) {
  return {
    type: INPUT_CHANGE,
    inputValue,
  };
}

export function getLocation(location) {
  return {
    type: GET_LOCATION,
    location,
  };
}

export function getZip(zip) {
  return {
    type: GET_ZIP,
    zip,
  };
}

export function getWeather(weather) {
  return {
    type: GET_WEATHER,
    weather,
  };
}

export function makeRequest() {
  return async (dispatch) => {
    const locationURL = 'http://ip-api.com/json';
    fetch(locationURL)
      .then((res) => {
        res.json().then((data) => {
          dispatch(getLocation(data.city));
          dispatch(getZip(data.zip));
          const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${data.zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
          fetch(weatherURL)
            .then(nextRes => nextRes.json().then(nextData => dispatch(getWeather(nextData))));
        });
      });
  };
}

export function putButton(newLocation) {
  return (dispatch) => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;
    fetch(weatherURL)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            dispatch(getLocation(newLocation));
            dispatch(getWeather(data));
          });
        } else {
          alert('Incorrect city name!!!');
        }
      });
  };
}
