import React from 'react';

import './textarea.component.scss';

export class Textarea extends React.Component {
    render() {
        return (
            <label className={`${this.props.color?this.props.color:''} input-${this.props.type?this.props.type:'standard'}`}>
                <textarea placeholder=" " className={this.props.color?this.props.color:''} {...this.props} />
                <span className={`${this.props.label && this.props.placeholder?'hide-on-placeholder':''} ${this.props.color?this.props.color:''}`}>{this.props.label?this.props.label:this.props.placeholder}</span>
            </label>
        );
    }
} 
