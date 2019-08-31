import React from 'react';

import './checkbox.component.scss';

export class Checkbox extends React.Component {
    render() {
        return (
            <label className="checkbox-container">
                <input type="checkbox" className={this.props.color} {...this.props} />
                <span className={this.props.color}></span>
            </label>
        );
    }
} 