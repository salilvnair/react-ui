import React from 'react';

import './button.component.scss';

import { Icon } from '../icon/icon.component';

export class Button extends React.Component {
    render() {
        let type = this.props.type;
        let isIcon = false;
        let containsIcon = false;
        if((type+'').indexOf('icon') > -1) {
            containsIcon = true;
        }
        if(type==='icon') {
            isIcon = true;
        }
        return (
            <button className={ `basic ripple ${this.props.color} ${isIcon?'pure-icon':type}` } {...this.props}>
                { containsIcon? 
                <Icon provider={this.props.provider} size={24} name={this.props.children} />: this.props.children}
            </button>
        );
    }
} 