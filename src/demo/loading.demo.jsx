import React from 'react';
import { Loading } from '../lib';
import './demo.scss';
export class LoadingDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Linear Loading</h1>
                    <div className="row">
                        <Loading />
                        <Loading color="primary" />
                        <Loading color="warn" />
                        <Loading color="accent" />
                    </div>
                </div>
                <div>
                    <h1>Circular Loading</h1>
                    <div className="row">
                        <Loading type="circular" />
                        <Loading type="circular" color="primary" />
                        <Loading type="circular" color="warn" />
                        <Loading type="circular" color="accent" />
                    </div>
                </div>
            </div>
        );
    }
}