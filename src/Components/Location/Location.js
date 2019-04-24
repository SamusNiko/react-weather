import React from 'react'
import './Location.css'

const Location = props => (
    <div className={'Location'}>
        <div>Location:<p className={"currentLocation"}>{props.location}</p></div>
        <div>Enter city:
            <input className={'Location_Input'} type="text" onChange={props.onChange} />
            <button onClick={props.putButton}>Apply</button>
        </div>
    </div>
)

export default Location
