import React from 'react';

import './icon.component.scss';

export class Icon extends React.Component {
    render() {
        return (
            <span className={ `icon` } {...this.props}>
                <i className={`material-icons md-${this.props.size} ${this.props.color}`}>{this.props.name?this.props.name:this.props.children}</i>
            </span>
        );
    }
} 