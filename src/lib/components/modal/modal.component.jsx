import React from 'react';
import ReactDOM from 'react-dom';
import { SemanticBase } from '../../external/semantic-base.component';
import './modal.component.scss';
export class Modal extends SemanticBase {

    static Header = ({ children }) => {
        return (
            <div className="header">
                {children}
            </div>
        );

    };
    static Content = ({ children }) => {
        return (
            <div className="content">
                {children}
            </div>
        );
    };
    static Actions = ({ children }) => {
        return (
            <div className="actions">
                {children}
            </div>
        );
    };

    state = {
        hide: true
    }

    close = () => {
        if(this.props.onClose) {
            this.props.onClose();
        }
        this.setState({hide:true});
    }

    closeOnBackDrop = () => {
        if(!this.props.disableClose) {
            if(this.props.onClose) {
                this.props.onClose();
            }
            this.setState({hide:true});
        }
    }
    

    open = () => {
        if(this.props.onOpen) {
            this.props.onOpen();
        }
        this.setState({hide:false});
    }

    semanticUiModal() {
        const { hide } = this.state;
        return (
            <div onClick={() => this.closeOnBackDrop()} className="ui dimmer modals visible active" style={{display: hide?'none':''}}>
                <div onClick={e => e.stopPropagation()} className="ui standard modal visible active" style={{width:this.props.width?this.props.width:'700px',height:this.props.height?this.props.height:'200px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    render() {
        super.render();
        return (
            ReactDOM
                .createPortal(this.semanticUiModal(),
                             document.querySelector("#modal"))
        );
    }
} 
