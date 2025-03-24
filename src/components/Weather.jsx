import React from 'react';

const Weather = ({weather, message}) => {


    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location:  {weather.country}, {weather.city} </p>
                    <p>Temperatur: {weather.temp}°C</p>
                    <p>Preassure: {weather.pressure} pa</p>
                    <p>Sunset: { (new Date(weather.sunset*1000)).toLocaleTimeString()} </p>
                </>
            }
            {message}
        </div>

    );
};

export default Weather;                                                                                                                    