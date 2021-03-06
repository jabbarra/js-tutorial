import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind})=>(
    <div className="weatherExtraInfoContainer">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;