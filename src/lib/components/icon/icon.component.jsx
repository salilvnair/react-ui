import React from 'react';
import { SemanticUiIcon } from './semantic-ui-icon/semantic-ui-icon.component';
import './icon.component.scss';

export class Icon extends React.Component {

    showMaterialIcons() {
        return (
            <span className={ `icon` } {...this.props}>
                <i className={`material-icons md-${this.props.size} ${this.props.color}`}>{this.props.name?this.props.name:this.props.children}</i>
            </span>
        );
    }

    showSemanticIcons() {
        return (
            <SemanticUiIcon  {...this.props} />
        );
    }

    render() {
        let provider = this.props.provider? this.props.provider:'google'
        return (
            provider === 'google' ? this.showMaterialIcons() : this.showSemanticIcons()
        );
    }
} 