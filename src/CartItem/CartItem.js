import React, { Component } from 'react';
import './CartItem.css';
import USCurrencyFormat from '../USCurrencyFormat/USCurrencyFormat';

class CartItem extends Component {
    render() {
        const {feature, idx, selectedOption} = this.props;
        const featureHash = feature + '-' + idx;
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }      
}

export default CartItem
