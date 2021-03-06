import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import LocationList from './../components/LocationList';
import {getCity, getCitiesWeather} from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const {city, cities, dispatchSetCity, dispatchSetWeather} = this.props;
        dispatchSetWeather(cities);
        dispatchSetCity(city);
    }
    

    //TODO estudiar scopes
    onSelectedLocation = city => {
        console.log(`OnSelection: ${city}`);
        this.props.dispatchSetCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.onSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

/** 
const mapDispatchToProps = dispatch => ({
    dispatchSetWeather: payload => dispatch(actions.dispatchSetWeather(payload)),
    dispatchSetCity: payload => dispatch(actions.dispatchSetCity(payload))
});
*/


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    city: getCity(state),
    citiesWeather: getCitiesWeather(state)
});
  

//TODO si se cambio el export de App a AppConnected porque no se cambia en el index
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
  