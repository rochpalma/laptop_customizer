import React, { Component } from 'react';
import './Customizer.css';
import Specs from '../Specs/Specs';

class Customizer extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
        return (
            <Specs
                item={idx}
                feature={feature}
                options={this.props.features[feature]}
                selected={this.props.selected[feature]}
                updateFeature={this.props.updateFeature}
            />
            );
        })
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form> 
        );   
    }
}

export default Customizer;


