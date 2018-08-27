import React, {Component} from 'react';

const Message = (props) => (
    <div className='message'>
    <div>{props.username}</div>
    <div>{props.text}</div>
 </div>
)
export default Message;