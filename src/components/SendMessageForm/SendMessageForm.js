import React, {Component} from 'react';

class SendMessageForm extends Component{
    constructor(){
        super()

        this.state = {
            message: ''
        }

    }
        handleChange = (e) => {
            this.setState({
                message: e.target.value
            })

    }

        handleSubmit = (e) => {
            console.log(this.state.message)
            e.preventDefault()
        }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className='send-message-form'>
                <input placeholder='Send a Message!' type='text' onChange={this.handleChange} value={this.state.message}/>
                </form>
        )
    }
}

export default SendMessageForm;