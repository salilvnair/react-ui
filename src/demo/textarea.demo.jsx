import React from 'react';
import { Textarea } from '../lib';
import './demo.scss';
export class TextareaDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Standard Textarea</h1>
                    <div className="row">
                        <Textarea type="standard" placeholder="Enter Name" />
                        <Textarea color="primary" type="standard" placeholder="Enter Name" />
                        <Textarea color="warn" type="standard" placeholder="Enter Name" />
                        <Textarea color="accent" type="standard" placeholder="Enter Name" />
                        <Textarea color="accent" disabled type="standard" placeholder="Enter Name" />
                    </div>
                </div>
                <div>
                    <h1>Filled Textarea</h1>
                    <div className="row">
                        <Textarea type="filled" placeholder="Enter Name" />
                        <Textarea color="primary" type="filled" placeholder="Enter Name" />
                        <Textarea color="warn" type="filled" placeholder="Enter Name" />
                        <Textarea color="accent" type="filled" placeholder="Enter Name" />
                        <Textarea color="accent" disabled type="filled" placeholder="Enter Name" />
                    </div>
                </div>
                <div>
                    <h1>Outlined Textarea</h1>
                    <div className="row">
                        <Textarea type="outlined" placeholder="Enter Name" />
                        <Textarea color="primary" type="outlined" placeholder="Enter Name" />
                        <Textarea color="warn" type="outlined" placeholder="Enter Name" />
                        <Textarea color="accent" type="outlined" placeholder="Enter Name" />
                        <Textarea color="accent" disabled type="outlined" placeholder="Enter Name" />
                    </div>
                </div>
            </div>
        );
    }
}