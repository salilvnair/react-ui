import React from 'react';
import { Avatar, Button } from '../lib';
import './demo.scss';
export class AvatarDemo extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Avatar Type Image</h1>
                    <div className="row">
                        <Avatar 
                        url="https://www.w3schools.com/howto/img_avatar.png" 
                        name="HandsomeHunk@gmail.com" />
                        <Avatar 
                        url="https://www.w3schools.com/howto/img_avatar2.png" 
                        name="SexyBitch@gmail.com" />
                        <div style={{display: 'inline-block'}}>
                            <Button style={{height:'50px', width:'50px'}} type="round icon" color="primary">add</Button>
                            <div className="footer">
                                Add User
                            </div>
                        </div>
                    </div>
                    <h1>Avatar Type Letter</h1>
                    <div className="row">
                        <Avatar type="letter"
                        url="https://www.w3schools.com/howto/img_avatar.png" 
                        name="HandsomeHunk@gmail.com" />
                        <Avatar type="letter"
                        url="https://www.w3schools.com/howto/img_avatar.png" 
                        name="SexyBitch@gmail.com" />
                        <div style={{display: 'inline-block'}}>
                            <Button style={{height:'50px', width:'50px'}} type="round icon" color="primary">add</Button>
                            <div className="footer">
                                Add User
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}