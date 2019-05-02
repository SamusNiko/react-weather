import actionConst from '@constants/actions';


export function setUserLocation(yourLocation) {
  const address = {
    city: yourLocation.city,
    country: yourLocation.country,
    road: yourLocation.road,
  };
  return {
    type: actionConst.SET_USER_LOCATION,
    payload: address,
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
    const weatherURL = `https://eu1.locationiq.com/v1/reverse.php?key=${key}&lat=${lat}&lon=${lon}&format=json`;
    fetch(weatherURL)
      .then(res => res.json().then(nextData => dispatch(setUserLocation(nextData.address))));
  };
}

export function getCoordinates() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coordinates = pos.coords;
      dispatch(setCoordinates(coordinates.latitude, coordinates.longitude));
    });
  };
}

export function getWeather(city) {
  return async (dispatch) => {
    const key = process.env.REACT_APP_WEATHER_KEY;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
    fetch(weatherURL)
      .then((res) => {
        if (res.ok) {
          res.json().then(data => dispatch(setWeather(data)));
        }
      });
  };
}

export function onButtonClick(newLocation) {
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
