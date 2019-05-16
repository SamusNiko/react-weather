import actionConst from '@/constants/actions';
import { WEATHER_API_URL, LOCATION_API_URL } from '@/constants/services';


export function setUserLocation(userLocation) {
  const address = {
    country: userLocation.country,
    city: userLocation.city,
    street: userLocation.road,
  };
  return {
    type: actionConst.SET_USER_LOCATION,
    payload: address,
  };
}

export function setUserLocationError(error) {
  const userLocationError = { error };
  return {
    type: actionConst.SET_USER_LOCATION,
    payload: userLocationError,
  };
}

export function setWeatherError(error) {
  const weatherError = { error };
  return {
    type: actionConst.SET_WEATHER,
    payload: weatherError,
  };
}


export function setWeather(weather) {
  return {
    type: actionConst.SET_WEATHER,
    payload: weather,
  };
}

export function setCoordinates(lat, lon) {
  const newCoordinates = { lat: lat.toFixed(8), lon: lon.toFixed(8) };
  return {
    type: actionConst.SET_COORDINATES,
    payload: newCoordinates,
  };
}

export function getUserLocation(coordinates) {
  return (dispatch) => {
    const key = process.env.REACT_APP_LOCATION_KEY;
    const { lat, lon } = coordinates;
    const weatherURL = `${LOCATION_API_URL}?key=${key}&lat=${lat}&lon=${lon}&normalizecity=1&format=json`;
    fetch(weatherURL)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            dispatch(setUserLocation(data.address));
          });
        } else {
          res.json().then((data => dispatch(setUserLocationError(data.error))));
        }
      })
      .catch(error => console.log(error));
  };
}

export function getCoordinates() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordinates = pos.coords;
      dispatch(setCoordinates(coordinates.latitude, coordinates.longitude));
    }, () => alert('Geolocation is disabled'));
  };
}

export function getWeatherByCityName(city) {
  return (dispatch) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const weatherURL = `${WEATHER_API_URL}?q=${city}&APPID=${key}&units=metric`;
    fetch(weatherURL)
      .then((res) => {
        if (res.ok) {
          res.json().then(data => dispatch(setWeather(data)));
        } else {
          res.json().then(data => dispatch(setWeatherError(data.message)));
        }
      })
      .catch(error => console.log(error));
  };
}
