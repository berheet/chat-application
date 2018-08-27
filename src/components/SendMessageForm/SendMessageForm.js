import React, {Component} from 'react';

class SendMessageForm extends Component{
    constructor(){
        super()

        this.state = {

        }

        handleChange = () => {
            console.log(e.target.value)
        }

    }
    render(){
        return(
            <form className='send-message-form'>
                <input placeholder='Send a Message!' type='text' onChange={this.handleChange} />
                </form>
        )
    }
}