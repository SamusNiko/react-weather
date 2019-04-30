import {
  SET_COORD,
  SET_YOUR_LOCATION,
  INPUT_CHANGE,
  SET_WEATHER,
} from '@Constants/actions';

export function inputChange(inputValue) {
  return {
    type: INPUT_CHANGE,
    inputValue,
  };
}

export function setYourLocation(yourLocation) {
  return {
    type: SET_YOUR_LOCATION,
    yourLocation,
  };
}

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    weather,
  };
}

export function setCoord(lat, lon) {
  const newCoord = { lat: lat.toFixed(8), lon: lon.toFixed(8) };
  return {
    type: SET_COORD,
    coord: newCoord,
  };
}

export function getYourLocation(coord) {
  return async (dispatch) => {
    const key = process.env.REACT_APP_LOCATION_KEY;
    const { lat, lon } = coord;
    const weatherURL = `https://eu1.locationiq.com/v1/reverse.php?key=${key}&lat=${lat}&lon=${lon}&format=json`;
    fetch(weatherURL)
      .then(res => res.json().then(nextData => dispatch(setYourLocation(nextData.address))));
  };
}

export function getCoord() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      dispatch(setCoord(crd.latitude, crd.longitude));
    }, () => {
      const yourLocationUndefiend = null;
      dispatch(setYourLocation(yourLocationUndefiend));
    });
  };
}

export function getWeather(city) {
  return async (dispatch) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
    fetch(weatherURL)
      .then((res) => { res.json().then(nextData => dispatch(setWeather(nextData))); });
  };
}

export function putButton(newLocation) {
  return (dispatch) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&APPID=${key}&units=metric`;
    fetch(weatherURL)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            dispatch(setWeather(data));
          });
        } else {
          alert('Incorrect city name!');
        }
      });
  };
}
