import React from 'react';
import PropTypes from 'prop-types';



export const LabelInput = ({ name, label }) => {
    return (        
            <label htmlFor={name}>{label}:</label>        
    );
};

LabelInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired   
};

