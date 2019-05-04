import actionConst from '@/constants/actions';

const initialState = {
  coordinates: {},
  userLocation: {},
  weatherData: {},
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case actionConst.SET_USER_LOCATION:
      return {
        ...state, userLocation: action.payload,
      };
    case actionConst.SET_COORDINATES:
      return {
        ...state, coordinates: action.payload,
      };
    case actionConst.SET_WEATHER:
      return {
        ...state, weatherData: action.payload,
      };
    default:
      return state;
  }
}
