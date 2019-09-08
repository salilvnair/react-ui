import React from 'react';
import { ExpansionPanel, Checkbox, Icon } from '../lib';
import './demo.scss';
export class ExpansionPanelDemo extends React.Component {
    activateItem(event) {
        let divElem = event.target;
        this.applyItemHighlight(divElem);
    }
    applyItemHighlight(divElem) {
        if(divElem.classList && divElem.classList.contains('playlist-content')) {
            document.querySelectorAll('.playlist-content').forEach(item =>{
                item.classList.remove('highlight-item');
            })
            divElem.classList.add('highlight-item');
        }
        else {
            this.applyItemHighlight(divElem.parentNode);
        }
    }
    render() {
        return(
            <div>
                <div>
                    <h1>Expansion Panel</h1>
                    <div style={{maxWidth:'400px'}}>
                        <ExpansionPanel 
                            header='Disabled' 
                            content='Hello' 
                            disabled />
                        <ExpansionPanel header="Section 1">
                            <div className="playlist-content" onClick={(e) => this.activateItem(e)}>
                                <div  className= "playlist-item">
                                    <div style={{marginTop:'7px'}}>
                                        <Checkbox color="primary" />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column',marginTop:'10px'}}>
                                        <div className="info">
                                            <p style={{margin:'0px'}}>How to get help</p>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <Icon style={{marginTop:'10px'}}>play_circle_outline</Icon><p>1min</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </ExpansionPanel>
                        <ExpansionPanel header="Section 2">
                            <div className="playlist-content" onClick={(e) => this.activateItem(e)}>
                                <div className= "playlist-item" >
                                    <div style={{marginTop:'7px'}}>
                                        <Checkbox color="primary" />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column',marginTop:'10px'}}>
                                        <div className="info">
                                            <p style={{margin:'0px'}}>Our First App</p>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <Icon style={{marginTop:'10px'}}>play_circle_outline</Icon><p>10min</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="playlist-content" onClick={(e) => this.activateItem(e)}>
                                <div className= "playlist-item" >
                                    <div style={{marginTop:'7px'}}>
                                        <Checkbox color="primary" />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column',marginTop:'10px'}}>
                                        <div className="info">
                                            <p style={{margin:'0px'}}>Critical Questions</p>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <Icon style={{marginTop:'10px'}}>play_circle_outline</Icon><p>8min</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            <div className="playlist-content" onClick={(e) => this.activateItem(e)}>
                                <div className= "playlist-item">
                                    <div style={{marginTop:'7px'}}>
                                        <Checkbox color="primary" />
                                    </div>
                                    <div style={{display:'flex', flexDirection:'column',marginTop:'10px'}}>
                                        <div className="info">
                                            <p style={{margin:'0px'}}>Link to github repo</p>
                                        </div>
                                        <div style={{display:'flex', backgroundBlendMode:'lighten'}}>
                                            <Icon color="light" style={{marginTop:'10px'}}>insert_drive_file</Icon><p>1min</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </ExpansionPanel>
                    </div>
                </div>
            </div>
        );
    }
}