import React from 'react';
import { Slider } from '../lib';
import './demo.scss';
export class SliderDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Slider</h1>
                    <div className="row">
                        <Slider />
                        <Slider color="primary" />
                        <Slider color="warn" />
                        <Slider color="accent" />
                        <Slider disabled color="warn" />
                    </div>
                </div>
            </div>
        );
    }
}