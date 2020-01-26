import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import { setPropsAsInitial } from '../helper-hoc/setPropsAsInitial';

const CustomerEdit = ({name, age, dni}) => {
    return (
        <div>
            <h2>Edit data of customer</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    dni: PropTypes.string,
};

const CustomerEditForm = reduxForm({form: 'CustomerEdit'})(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);