import React from 'react';
import { SemanticBase } from '../../../external/semantic-base.component';
import './semantic-ui-icon.component.scss';
export class SemanticUiIcon extends SemanticBase {
    render() {
        super.render();
        return (
            <span className={ `icon` } {...this.props}>
                <i className={this.props.name?this.props.name:this.props.children}></i>
            </span>
        );
    }
}