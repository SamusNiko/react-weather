import React, { Component } from 'react'
import "./Weather.css"
import WeatherDrow from '../../Components/WeatherDrow/WeatherDrow'
import Location from '../../Components/Location/Location'
import { connect } from 'react-redux'
import { makeRequest, inputChange, putButton } from '../../store/actions/weather'

class Weather extends Component {


    componentDidMount() {
        this.props.makeRequest()
    }

    render() {
        return(
        !this.props.weatherData?  <div>Loading</div> :
            <div className={"Weather"}>
                <h1>Weather</h1>
                <Location
                    location={this.props.location}
                    onChange={event => this.props.inputChange(event.target.value)}
                    putButton={()=>this.props.putButton(this.props.inputValue)}
                />
                <WeatherDrow
                    location={this.props.location}
                    weatherData={this.props.weatherData}
                />
            </div>
        );
    }



}
function mapStateToProps(state) {
    return {
        location: state.weather.location,
        zip: state.weather.zip,
        weatherData: state.weather.weatherData,
        inputValue: state.weather.inputValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        makeRequest: () => dispatch(makeRequest()),
        inputChange: inputValue => dispatch(inputChange(inputValue)),
        putButton: inputValue=> dispatch(putButton(inputValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)