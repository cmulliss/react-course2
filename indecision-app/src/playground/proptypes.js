import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Thing extends Component {
    Thing.propTypes = {
        title: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        initialQty: React.PropTypes.number
    };
    Thing.defaultProps = {
        title: 'Undefined Product',
        price: 100,
        initialQty: 0
    };
    
    render () {
        return (
            <div> 

            </div>
        )
    }
}

export default Thing;

