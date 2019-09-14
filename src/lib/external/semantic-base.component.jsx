import React from 'react';

import './semantic.css';


export class SemanticBase extends React.Component {
    render() {
        if(!document.querySelector("#modal")) {
            var modal = document.createElement('div');
            modal.id = "modal";
            document.body.appendChild(modal);
        }
        return null;
    }
}