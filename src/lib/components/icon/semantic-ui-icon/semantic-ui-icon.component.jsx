import React from 'react';
import { SemanticBase } from '../../../external/semantic-base.component';
import './semantic-ui-icon.component.scss';
export class SemanticUiIcon extends SemanticBase {
    render() {
        super.render();
        return (
            <span className={ `icon` } {...this.props}>
                <i style={{fontSize: this.props.size?this.props.size+'px':'24px'}} className={this.props.name?this.props.name:this.props.children}></i>
            </span>
        );
    }
}