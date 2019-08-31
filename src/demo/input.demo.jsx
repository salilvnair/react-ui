import React from 'react';
import { Input } from '../lib';
import './demo.scss';
export class InputDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Standard Input</h1>
                    <div className="row">
                        <Input type="standard" placeholder="Enter Name" />
                        <Input color="primary" type="standard" placeholder="Enter Name" />
                        <Input color="warn" type="standard" placeholder="Enter Name" />
                        <Input color="accent" type="standard" placeholder="Enter Name" />
                        <Input color="accent" disabled type="standard" placeholder="Enter Name" />
                    </div>
                </div>
                <div>
                    <h1>Filled Input</h1>
                    <div className="row">
                        <Input type="filled" placeholder="Enter Name" />
                        <Input color="primary" type="filled" placeholder="Enter Name" />
                        <Input color="warn" type="filled" placeholder="Enter Name" />
                        <Input color="accent" type="filled" placeholder="Enter Name" />
                        <Input color="accent" disabled type="filled" placeholder="Enter Name" />
                    </div>
                </div>
                <div>
                    <h1>Outlined Input</h1>
                    <div className="row">
                        <Input type="outlined" placeholder="Enter Name" />
                        <Input color="primary" type="outlined" placeholder="Enter Name" />
                        <Input color="warn" type="outlined" placeholder="Enter Name" />
                        <Input color="accent" type="outlined" placeholder="Enter Name" />
                        <Input color="accent" disabled type="outlined" placeholder="Enter Name" />
                    </div>
                </div>
            </div>
        );
    }
}