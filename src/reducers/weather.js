import {
  SET_YOUR_LOCATION,
  INPUT_CHANGE,
  SET_WEATHER,
  SET_COORD,
} from '@Constants/actions';

const initialState = {
  coord: null,
  yourLocation: null,
  weatherData: null,
  inputValue: null,

};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YOUR_LOCATION:
      return {
        ...state, yourLocation: action.payload,
      };
    case SET_COORD:
      return {
        ...state, coord: action.payload,
      };
    case INPUT_CHANGE:
      return {
        ...state, inputValue: action.payload,
      };
    case SET_WEATHER:
      return {
        ...state, weatherData: action.payload,
      };
    default:
      return state;
  }
}
