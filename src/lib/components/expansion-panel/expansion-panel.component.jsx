import React from 'react';

import './expansion-panel.component.scss';


export class ExpansionPanel extends React.Component {
   
    expandCollapsePanel(e) {
        let panelElement = e.target;
        panelElement.classList.toggle('active');
        var panel = panelElement.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } 
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    render() {
        return (
            <div>
                    <button disabled={this.props.disabled ? true : false} className="accordion" onClick={(e) => this.expandCollapsePanel(e)}>{this.props.header?this.props.header:''}</button>
                    <div className="panel">
                        {this.props.children?this.props.children:(this.props.content?this.props.content:'')}
                    </div>
            </div>
        );
    }   
}
