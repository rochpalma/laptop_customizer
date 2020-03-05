import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import OrderTotal from '../OrderTotal/OrderTotal';

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            return (
                <CartItem
                    idx={idx}
                    feature={feature}
                    selectedOption={this.props.selected[feature]}
                />
            )
        }); 
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <OrderTotal
                    selected={this.props.selected}
                />
          </section>
        );
    }      
}

export default Cart;
