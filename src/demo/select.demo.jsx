import React from 'react';
import { Select } from '../lib';
import './demo.scss';
export class SelectDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Select Demo</h1>
                    <div className="row">
                        <Select />                
                        <Select />                
                    </div>
                </div>
            </div>
        );
    }
}