import React from 'react';

import './loading.component.scss';

export class Loading extends React.Component {
    render() {
        return (
                <progress {...this.props} 
                className={`loading-${this.props.type?this.props.type:'linear'} ${this.props.color}`}/>
        );
    }
} 