import React from 'react';

import './slider.component.scss';

export class Slider extends React.Component {
    render() {
        return (
            <label className="slider-container">
                <input type="checkbox" className={this.props.color} {...this.props} />
                <span className={this.props.color}></span>
            </label>
        );
    }
} 