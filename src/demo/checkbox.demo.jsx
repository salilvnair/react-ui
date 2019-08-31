import React from 'react';
import { Checkbox } from '../lib';
import './demo.scss';
export class CheckboxDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Checkbox</h1>
                    <div className="row">
                        <Checkbox />
                        <Checkbox color="primary" />
                        <Checkbox color="warn" />
                        <Checkbox color="accent" />
                        <Checkbox color="accent" disabled />
                    </div>
                </div>
            </div>
        );
    }
}