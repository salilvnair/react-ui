import React from 'react';
import { Button } from '../lib';
import './demo.scss';

export class ButtonDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Basic Button</h1>
                    <div className="row">
                        <Button>Basic</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="warn">Warn</Button>
                        <Button color="accent">Accent</Button>
                        <Button type="basic icon">face</Button>
                        <Button disabled>Disabled</Button>
                    </div>
                </div>
                <div>
                    <h1>Pure Button Icon with ripple effect</h1>
                    <div className="row">
                        <Button type="icon">face</Button>
                        <Button color="primary" type="icon">face</Button>
                        <Button color="warn" type="icon">face</Button>
                        <Button color="accent" type="icon">face</Button>
                        <Button disabled type="icon">face</Button>
                    </div>
                </div>
                <div>
                    <h1>Raised Button</h1>
                    <div className="row">
                        <Button type="raised">Basic</Button>
                        <Button color="primary" type="raised">Primary</Button>
                        <Button color="warn" type="raised">Warn</Button>
                        <Button color="accent" type="raised">Accent</Button>
                        <Button type="raised icon">face</Button>
                        <Button disabled color="warn" type="raised">Disabled</Button>
                    </div>
                </div>
                <div>
                    <h1>Round Button</h1>
                    <div className="row">
                        <Button type="round">Basic</Button>
                        <Button color="primary" type="round">Primary</Button>
                        <Button color="warn" type="round">Warn</Button>
                        <Button color="accent" type="round">Accent</Button>
                        <Button type="round icon">face</Button>
                        <Button disabled color="warn" type="round">Disabled</Button>
                    </div>
                </div>
            </div>
        );
    }
}