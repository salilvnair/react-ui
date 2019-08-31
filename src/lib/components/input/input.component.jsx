import React from 'react';

import './input.component.scss';

export class Input extends React.Component {
    render() {
        return (
            <label className={`${this.props.color?this.props.color:''} input-${this.props.type?this.props.type:'standard'}`}>
                <input placeholder=" " className={this.props.color?this.props.color:''} {...this.props} />
                <span className={`${this.props.label && this.props.placeholder?'hide-on-placeholder':''} ${this.props.color?this.props.color:''}`}>{this.props.label?this.props.label:this.props.placeholder}</span>
            </label>
        );
    }
} 
