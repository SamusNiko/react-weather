import {
  SET_YOUR_LOCATION,
  SET_OTHER_LOCATION,
  INPUT_CHANGE,
  SET_WEATHER,
  SET_COORD,
} from '../Constants/actions';

const initialState = {
  coord: null,
  yourLocation: null,
  otherLocation: null,
  weatherData: null,
  inputValue: null,

};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YOUR_LOCATION:
      return {
        ...state, yourLocation: action.yourLocation,
      };
    case SET_OTHER_LOCATION:
      return {
        ...state, otherLocation: action.otherLocation,
      };
    case SET_COORD:
      return {
        ...state, coord: action.coord,
      };
    case INPUT_CHANGE:
      return {
        ...state, inputValue: action.inputValue,
      };
    case SET_WEATHER:
      return {
        ...state, weatherData: action.weather,
      };
    default:
      return state;
  }
}
