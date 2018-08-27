import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList/MessageList'
import Chatkit from '@pusher/chatkit';

const instanceLocator = 'v1:us1:d855e2ce-509d-4390-929f-3a775bd20a11';
const tokenUrl =  'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d855e2ce-509d-4390-929f-3a775bd20a11/token'

class App extends Component {
  constructor(){
    super()

    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Eyobell123',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
      chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 14854249,
          hooks: {
            onNewMessage: message => {
              this.setState({
                  messages: [...this.state.messages, message]
              })
            }
          }
        })
      })

  }
  render() {
    return (
      <div className="App">
     <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
