import React from 'react';
import { Icon } from '../lib';
import './demo.scss';
export class IconDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Google Material Icon</h1>
                    <div className="row">
                        <Icon>fingerprint</Icon>
                        <Icon color="primary">mail</Icon>
                        <Icon color="warn">face</Icon>
                        <Icon color="accent">android</Icon>
                    </div>
                </div>
                <div>
                    <h1>Semantic UI Icon</h1>
                    <div className="row">
                        <Icon provider="semantic" style={{fontSize:'2em'}}>angle double down icon</Icon>
                        <Icon provider="semantic" name="angle up icon" />
                    </div>
                </div>
            </div>
        );
    }
}