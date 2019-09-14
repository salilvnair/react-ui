import React from 'react';
import { Button, Modal, Input } from '../lib';
import './demo.scss';
export class ModalDemo extends React.Component {
    state = {
        userMail: ''
    }
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    closeModal() {
        this.child.current.close();
    }

    addUser = () => {
        console.log(this.state.userMail);
        this.closeModal();
    }

    recordUserMail = (e) => {
        this.setState({userMail: e.target.value})
    }

    onClose() {
        console.log('I got closed so what!');
    }

    showModal() {
        this.child.current.open();
    }

    render() {
        return(
            <div>
                <div>
                    <h1>Modal Demo</h1>
                    <Button type="raised" color="primary" onClick={() => this.showModal()} >Open</Button>
                    <Modal disableClose onClose={() => this.onClose()}width="300px" height="200px" ref={this.child}> 
                        <Modal.Header>
                            Add User
                        </Modal.Header> 
                        <Modal.Content>
                            <div className="login">
                                <Input 
                                    type="filled" 
                                    onChange={(e) => this.recordUserMail(e)}
                                    placeholder="Enter Email" />
                            </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <React.Fragment>
                                <button onClick={() => this.addUser()} className="ui button primary">Add</button>
                                <button onClick={() => this.closeModal()} className="ui button">Cancel</button>
                            </React.Fragment>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        );
    }
}