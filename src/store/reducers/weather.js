import {
    GET_LOCATION,
    GET_ZIP,
    INPUT_CHANGE,
    GET_WEATHER
} from '../actions/actionTypes'

const initialState = {
    location: 'Paris',
    zip: null,
    weatherData: null,
    inputValue: null,

}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state, location: action.location
            }
        case GET_ZIP:
            return {
                ...state, zip: action.zip
            }

        case INPUT_CHANGE:
            return {
                ...state, inputValue: action.inputValue
            }
        case GET_WEATHER:
            return {
                ...state, weatherData: action.weather
            }
        default:
            return state
    }
}