import React from 'react';
import { Avatar, Button, Input } from '../lib';
import './demo.scss';
import { Modal } from '../lib/components/modal/modal.component';
export class AvatarDemo extends React.Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    closeModal() {
        this.child.current.dismiss();
    }

    showModal() {
        this.child.current.open();
    }

    render() {
        return(
            <div>
                <div>
                    <h1>Avatar Type Image</h1>
                    <Modal width="300px" height="200px" ref={this.child} header="Add User" actions={
                        <React.Fragment>
                            <button onClick={() => this.closeModal()} className="ui button primary">Add</button>
                            <button className="ui button">Cancel</button>
                        </React.Fragment>
                    }> 
                            <div className="login">
                                <Input type="filled" placeholder="Enter Email" />
                            </div>
                    </Modal>
                    <div className="row">
                        <Avatar 
                        url="https://www.w3schools.com/howto/img_avatar.png" 
                        name="HandsomeHunk@gmail.com" />
                        <Avatar 
                        url="https://www.w3schools.com/howto/img_avatar2.png" 
                        name="SexyBitch@gmail.com" />
                        <div style={{display: 'inline-block'}}>
                            <Button style={{height:'50px', width:'50px'}} type="round icon" color="primary" onClick={() => this.showModal()} >add</Button>
                        </div>
                    </div>
                    <h1>Avatar Type Letter</h1>
                    <div className="row">
                        <Avatar type="letter button"
                        url="https://www.w3schools.com/howto/img_avatar.png" 
                        name="HandsomeHunk@gmail.com" />
                        <Button type="round">
                            <Avatar type="letter"
                            url="https://www.w3schools.com/howto/img_avatar.png" 
                            name="UexyBitch@gmail.com" />
                        </Button>
                        
                        <div style={{display: 'inline-block'}}>
                            <Button style={{height:'50px', width:'50px'}} type="round icon" color="primary"  onClick={() => this.showModal()}>add</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}