import React from 'react';

const Weather = ({weather, message}) => {

    if(message){
        return (<div className={'infoWeath'}>{message}</div>);
    }
    return (
        <div className={'infoWeath'}>
            <p>Location:  {weather.country}, {weather.city} </p>
            <p>Temperatur: {weather.temp}°C</p>
            <p>Preassure: {weather.pressure} pa</p>
            <p>Sunset: { (new Date(weather.sunset*1000)).toLocaleTimeString()} </p>
        </div>
    );
};

export default Weather;                                                                                                                    