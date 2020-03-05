import React, { Component } from 'react';
import './Specs.css';
import SpecsOptions from '../SpecsOptions/SpecsOptions';

class Specs extends Component {
    render() {
        const {feature, idx} = this.props;
        const featureHash = feature + '-' + idx;
        const options = this.props.options.map(item => {
            return (
            <SpecsOptions
                item={item}
                feature={feature}
                options={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
            />
            );
        });
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
}

export default Specs;


