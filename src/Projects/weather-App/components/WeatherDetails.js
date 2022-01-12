import React from 'react'

const WeatherDetails = ({details,data}) => {
    console.log(details)
    return <>
                <div className="capital-weather">
                        <div>
                          <div className="weather-title">
                            <img
                              className="icon"
                              src={details?.current?.weather_icons[0]}
                              alt="icon"
                            ></img>
                            <h2>
                              Weather details of <span className='title-capital'>{details?.location.name}</span>
                            </h2>
                          </div>
                        </div>

                        <div>
                          temperature : <span>{details?.current?.temperature}</span>
                        </div>
                        <div>
                         Wind speed : <span>{details?.current?.wind_speed}</span>
                        </div>
    </div>

    </>
}

export default WeatherDetails
