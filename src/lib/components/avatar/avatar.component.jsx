import React from 'react'

import './avatar.component.scss';

export class Avatar extends React.Component {

    letterAvatar (name, size) {

        name  = name || '';
        size  = size || 60;

        var colours = [
                "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", 
                "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
            ],

            nameSplit = String(name).toUpperCase().split(' '),
            initials, charIndex, colourIndex, canvas, context, dataURI;


        if (nameSplit.length === 1) {
            initials = nameSplit[0] ? nameSplit[0].charAt(0):'?';
        } else {
            initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
        }

        if (window.devicePixelRatio) {
            size = (size * window.devicePixelRatio);
        }
            
        charIndex     = (initials === '?' ? 72 : initials.charCodeAt(0)) - 64;
        colourIndex   = charIndex % 20;
        canvas        = document.createElement('canvas');
        canvas.width  = size;
        canvas.height = size;
        context       = canvas.getContext("2d");
         
        context.fillStyle = colours[colourIndex - 1];
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.font = Math.round(canvas.width/2)+"px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, size / 2, size / 1.5);

        dataURI = canvas.toDataURL();
        canvas  = null;

        return dataURI;
    }

    letterType() {
        const width = this.props.width?this.props.width:50;
        const height = this.props.height?this.props.height:50;
        let url = this.letterAvatar(this.props.name?this.props.name:'name', width);
        return (
            <div style={{display:'inline-block'}}>
                <img 
                    style={{height: height+'px', width: width+'px'}}
                    src={url} 
                    alt={this.props.name?this.props.name:'name'} 
                    title={this.props.name?this.props.name:'name'}
                    className="avatar">
                </img>
                {
                    this.props.description ? 
                    <div className="footer" title={this.props.description}>
                        {
                            this.props.description.length>maxDescriptionLength?this.props.description.substring(0,maxDescriptionLength)+'...': this.props.description.length
                        }
                    </div>
                    : null
                }
            </div>
        );
    }

    imageType() {
        const height = this.props.height?this.props.height:50;
        const width = this.props.width?this.props.width:50;
        const maxDescriptionLength = this.props.maxDescriptionLength?this.props.maxDescriptionLength:this.props.description.length
        return (
            <div style={{display:'inline-block'}}>
                <img 
                    style={{height: height+'px', width: width+'px'}}
                    src={this.props.url?this.props.url:''} 
                    alt={this.props.name?this.props.name:'name'} 
                    title={this.props.name?this.props.name:'name'}
                    className="avatar">
                </img>
                {
                    this.props.description ? 
                    <div className="footer" title={this.props.description}>
                        {
                            this.props.description.length>maxDescriptionLength?this.props.description.substring(0,maxDescriptionLength)+'...': this.props.description.length
                        }
                    </div>
                    : null
                }
            </div>
        );
    }

    render() {

        const type = this.props.type?this.props.type: '';
        return (
            type==='letter'? this.letterType() : this.imageType()
        );
    }

} 